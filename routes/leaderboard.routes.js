import express from "express";
import { getLeaderboard, updateLeaderboardEntry } from "../controllers/leaderboard.controllers";
const router = express.Router()

router.get("/leaderboard", getLeaderboard);
router.patch("/leaderboard/:id", updateLeaderboardEntry);

export default router;