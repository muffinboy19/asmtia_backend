import express from "express";
import { getLeaderboard, updateLeaderboardEntry } from "../controllers/leaderboard.controllers.js";
const router = express.Router()

router.get("/", getLeaderboard);
router.post("/:id", updateLeaderboardEntry);

export default router;