import express from "express";
import { createAthleteResultController, createCricketResultController, createFootballResultController, getResultsController, updateAtheleteResultController, updateCricketResultController, updateFootballResultController } from "../controllers/results.controllers.js";

const router = express.Router();

router.get("/getresults", getResultsController);

router.post("/cricket",createCricketResultController);
router.post("/football",createFootballResultController);
router.post("/athletics",createAthleteResultController);

router.patch("/cricket/:id",updateCricketResultController);
router.patch("/football/:id",updateFootballResultController);
router.patch("/athletics/:id",updateAtheleteResultController);

// router.delete("/cricket/:id");
// router.delete("/football/:id");
// router.delete("/athletics/:id");

export default router;
