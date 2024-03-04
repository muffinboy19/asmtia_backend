import { response_200, response_500 } from "../utils/responseCodes.js";
import fixtureRouter from "./fixtures.routes.js";
import leaderboardRouter from "./leaderboard.routes.js";
import empLeaderboardRouter from "./empLeaderboard.routes.js";
import resultsRouter from "./results.routes.js";
import authRouter from "./auth.routes.js";
import express from "express";
import {
    executiveMiddleware,
    headMiddleware,
} from "../middlewares/isHeadExec.js";
import LogDetails from "../models/logDetails.schema.js";

const router = express.Router();

router.get("/", (req, res) => {
    response_200(res, "API is up and running.");
});
router.use("/fixtures", fixtureRouter);
router.use("/leaderboard", leaderboardRouter);
router.use("/emp/leaderboard", empLeaderboardRouter);
router.use("/auth", authRouter);
router.use("/results", resultsRouter);
router.get("/logs", executiveMiddleware, async (req, res) => {
    try {
        const logs = await LogDetails.find({});
        response_200(res, "Successfully fetched logs", logs);
    } catch (err) {
        console.log(err);
        response_500(res, "Error occurred while fetching logs", err);
    }
});

export default router;
