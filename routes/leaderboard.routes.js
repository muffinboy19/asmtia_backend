import express from "express";
import {
    getLeaderboard,
    updateLeaderboardEntry,
} from "../controllers/leaderboard.controllers.js";
import { headExecMiddleware } from "../middlewares/isHeadExec.js";
const router = express.Router();

router.get("/", getLeaderboard);
router.patch("/:id", headExecMiddleware, updateLeaderboardEntry);

export default router;
