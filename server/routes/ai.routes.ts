import { Router } from "express";
import { aiController } from "../controllers/ai.controller";

const router = Router();

// API endpoint for smart explanation & pronunciation tips
router.post("/explain", aiController.explain);

// API endpoint for Look-and-Speak (看图说话) speech analysis
router.post("/analyze-scenic", aiController.analyzeScenic);

// API endpoint to dynamically generate and cache scene illustration on-demand
router.get("/image/:stageId/:lessonId/:drillIndex", aiController.generateSceneImage);

export default router;
