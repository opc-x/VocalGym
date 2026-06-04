import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const lessonsDir = path.join(process.cwd(), "src", "data", "lessons");
const outputDir = path.join(process.cwd(), "public", "images", "drills");

// Helper to wait
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ Error: GEMINI_API_KEY environment variable is not set.");
    console.error("Please run with: GEMINI_API_KEY=your_key npm run generate-images");
    process.exit(1);
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Parse arguments
  const args = process.argv.slice(2);
  let targetStage: number | null = null;
  let targetLesson: number | null = null;
  let limit = Infinity;
  let delayMs = 3000; // 3 seconds delay between calls to prevent rate limiting

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--stage" && args[i + 1]) {
      targetStage = parseInt(args[i + 1]);
    } else if (args[i] === "--lesson" && args[i + 1]) {
      targetLesson = parseInt(args[i + 1]);
    } else if (args[i] === "--limit" && args[i + 1]) {
      limit = parseInt(args[i + 1]);
    } else if (args[i] === "--delay" && args[i + 1]) {
      delayMs = parseInt(args[i + 1]);
    }
  }

  console.log("🎨 Callan Method Illustration Pre-generator Starting...");
  console.log(`- Target Stage: ${targetStage ?? "All"}`);
  console.log(`- Target Lesson: ${targetLesson ?? "All"}`);
  console.log(`- Generation Limit: ${limit === Infinity ? "No Limit" : limit}`);
  console.log(`- API Delay: ${delayMs}ms\n`);

  let generatedCount = 0;

  const stages = targetStage ? [targetStage] : Array.from({ length: 12 }, (_, i) => i + 1);

  for (const stageId of stages) {
    if (generatedCount >= limit) break;

    const jsonPath = path.join(lessonsDir, `stage${stageId}.json`);
    if (!fs.existsSync(jsonPath)) {
      console.log(`⚠️ Stage ${stageId} JSON not found, skipping.`);
      continue;
    }

    console.log(`\n📂 Processing Stage ${stageId}...`);
    const rawData = fs.readFileSync(jsonPath, "utf-8");
    const stageData = JSON.parse(rawData);
    
    let jsonModified = false;

    // 1. Process drills in lessons
    const lessons = stageData.lessons || [];
    for (const lesson of lessons) {
      if (generatedCount >= limit) break;
      
      const lessonId = lesson.lessonId;
      if (targetLesson && lessonId !== targetLesson) continue;

      const drills = lesson.drillParagraphs || [];
      for (let idx = 0; idx < drills.length; idx++) {
        if (generatedCount >= limit) break;

        const drill = drills[idx];
        const filename = `stage${stageId}_lesson${lessonId}_drill${idx}.jpg`;
        const filepath = path.join(outputDir, filename);
        const webPath = `/images/drills/${filename}`;

        // Update path in JSON if it's not already pointing to the static folder
        if (drill.imagePath !== webPath) {
          drill.imagePath = webPath;
          jsonModified = true;
        }

        if (fs.existsSync(filepath)) {
          // Image already generated
          continue;
        }

        const prompt = drill.prompt || `A clean vector illustration showing: ${drill.question}`;
        console.log(`🎨 Generating: [Stage ${stageId} L${lessonId} Drill ${idx}]`);
        console.log(`   Prompt: "${prompt}"`);

        try {
          const response = await ai.models.generateImages({
            model: "imagen-3.0-generate-002",
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: "image/jpeg",
              aspectRatio: "1:1",
            }
          });

          if (response.generatedImages && response.generatedImages.length > 0) {
            const base64Bytes = response.generatedImages[0].image.imageBytes;
            const buffer = Buffer.from(base64Bytes, "base64");
            fs.writeFileSync(filepath, buffer);
            console.log(`   ✅ Saved to ${filename}`);
            generatedCount++;
            jsonModified = true;

            // Wait to avoid rate limits
            await sleep(delayMs);
          } else {
            console.error(`   ❌ Failed: No images returned for drill ${idx}`);
          }
        } catch (err: any) {
          console.error(`   ❌ API Error: ${err.message || err}`);
          console.log("   Waiting 10s before continuing...");
          await sleep(10000);
        }
      }
    }

    // 2. Align questions list in JSON
    const questions = stageData.questions || [];
    
    // Group drills by lesson for index matching
    const drillMap = new Map<string, string>(); // key: "lessonId_index" -> value: imagePath
    for (const lesson of lessons) {
      const lessonId = lesson.lessonId;
      const drills = lesson.drillParagraphs || [];
      for (let idx = 0; idx < drills.length; idx++) {
        drillMap.set(`${lessonId}_${idx}`, drills[idx].imagePath);
      }
    }

    // Now update questions array
    const qByLesson: Record<number, any[]> = {};
    for (const q of questions) {
      if (!qByLesson[q.lessonId]) qByLesson[q.lessonId] = [];
      qByLesson[q.lessonId].push(q);
    }

    for (const lessonIdStr in qByLesson) {
      const lessonId = parseInt(lessonIdStr);
      const qs = qByLesson[lessonId];
      for (let idx = 0; idx < qs.length; idx++) {
        const q = qs[idx];
        const webPath = drillMap.get(`${lessonId}_${idx}`);
        if (webPath && q.imagePath !== webPath) {
          q.imagePath = webPath;
          jsonModified = true;
        }
      }
    }

    // Save JSON back if updated
    if (jsonModified) {
      fs.writeFileSync(jsonPath, JSON.stringify(stageData, null, 2), "utf-8");
      console.log(`💾 Saved updated stage${stageId}.json`);
    }
  }

  console.log(`\n🎉 Finished! Pre-generated ${generatedCount} new images.`);
  console.log(`Total illustrations now saved in: public/images/drills/`);
}

main().catch(console.error);
