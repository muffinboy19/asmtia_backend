import { response_200 } from "../utils/responseCodes.js";
import fixtureRouter from "./fixtures.routes.js";
import leaderboardRouter from "./leaderboard.routes.js";
import resultsRouter from "./results.routes.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    response_200(res, "API is up and running.");
});
router.use("/fixtures", fixtureRouter);
router.use("/leaderboard", leaderboardRouter);
router.use("/results", resultsRouter);

export default router;
