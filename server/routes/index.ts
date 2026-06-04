import { Router } from "express";
import aiRoutes from "./ai.routes";

const router = Router();

// Mount all AI related routes under /api/
router.use("/", aiRoutes);
// Later, other routes can be added like:
// router.use("/users", userRoutes);

export default router;
