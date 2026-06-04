import { Request, Response } from "express";
import { aiService } from "../services/ai.service";

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
}

export const aiController = new AiController();
