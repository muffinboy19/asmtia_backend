import { response_200 } from "../utils/responseCodes.js";
import fixtureRouter from "./fixtures.routes.js";
import leaderboardRouter from "./leaderboard.routes.js";
import empLeaderboardRouter from "./empLeaderboard.routes.js";
import resultsRouter from "./results.routes.js";
import authRouter from "./auth.routes.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    response_200(res, "API is up and running.");
});
router.use("/fixtures", fixtureRouter);
router.use("/leaderboard", leaderboardRouter);
router.use("/emp/leaderboard", empLeaderboardRouter);
router.use("/auth", authRouter);
router.use("/results", resultsRouter);

export default router;
