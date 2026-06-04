import { Request, Response } from "express";
import { aiService } from "../services/ai.service";
import fs from "fs";
import path from "path";

export class AiController {
  
  async explain(req: Request, res: Response) {
    try {
      const { word, questionText, expectedAnswer, type } = req.body;
      const parsedData = await aiService.generateExplanation(word, questionText, expectedAnswer, type);
      res.json(parsedData);
    } catch (err: any) {
      console.error("Gemini Explain Error:", err);
      res.status(500).json({ error: err.message || "Failed to generate AI insights." });
    }
  }

  async analyzeScenic(req: Request, res: Response) {
    try {
      const { transcript, sceneTitle, levelNeeded, keywords } = req.body;
      const parsedData = await aiService.analyzeScenic(transcript, sceneTitle, levelNeeded, keywords);
      res.json(parsedData);
    } catch (err: any) {
      console.error("Gemini Scenic Analysis Error:", err);
      res.status(500).json({ error: err.message || "Failed to analyze scenic speaking reflex." });
    }
  }

  async generateSceneImage(req: Request, res: Response) {
    try {
      const { stageId, lessonId, drillIndex } = req.params;
      const sId = parseInt(stageId);
      const lId = parseInt(lessonId);
      const dIdx = parseInt(drillIndex);

      if (isNaN(sId) || isNaN(lId) || isNaN(dIdx)) {
        return res.status(400).json({ error: "Invalid parameters." });
      }

      const cacheDir = path.join(process.cwd(), "public", "images", "cache");
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      const cacheFilename = `stage${sId}_lesson${lId}_drill${dIdx}.jpg`;
      const cachePath = path.join(cacheDir, cacheFilename);

      if (fs.existsSync(cachePath)) {
        return res.sendFile(cachePath);
      }

      const jsonPath = path.join(process.cwd(), "src", "data", "lessons", `stage${sId}.json`);
      if (!fs.existsSync(jsonPath)) {
        return res.status(404).json({ error: "Stage not found." });
      }

      const rawData = fs.readFileSync(jsonPath, "utf-8");
      const stageData = JSON.parse(rawData);
      const lesson = stageData.lessons.find((l: any) => l.lessonId === lId);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found." });
      }

      const drill = lesson.drillParagraphs[dIdx];
      if (!drill) {
        return res.status(404).json({ error: "Drill not found." });
      }

      const prompt = drill.prompt || `A clean vector illustration showing: ${drill.question}`;
      console.log(`Generating image for Stage ${sId} Lesson ${lId} Drill ${dIdx} with prompt: "${prompt}"`);

      const imgBuffer = await aiService.generateImage(prompt);
      fs.writeFileSync(cachePath, imgBuffer);

      res.sendFile(cachePath);
    } catch (err: any) {
      console.error("Gemini Image Generation Error:", err);
      res.status(500).json({ error: err.message || "Failed to generate drill scene image." });
    }
  }
}

export const aiController = new AiController();
