import express from "express";
import {
    createAthleteResultController,
    createCricketResultController,
    createFootballResultController,
    deleteAthleteResultController,
    deleteCricketResultController,
    deleteFootballResultController,
    getAthleticsResultsById,
    getCricketResultsById,
    getFootballResultsById,
    getResultsController,
    updateAtheleteResultController,
    updateCricketResultController,
    updateFootballResultController,
} from "../controllers/results.controllers.js";

const router = express.Router();

router.get("/getresults", getResultsController);
router.get("/getresults/athletics/:id", getAthleticsResultsById);
router.get("/getresults/football/:id", getFootballResultsById);
router.get("/getresults/cricket/:id", getCricketResultsById);

router.post("/cricket", createCricketResultController);
router.post("/football", createFootballResultController);
router.post("/athletics", createAthleteResultController);

router.patch("/cricket/:id", updateCricketResultController);
router.patch("/football/:id", updateFootballResultController);
router.patch("/athletics/:id", updateAtheleteResultController);

router.delete("/cricket/:id", deleteCricketResultController);
router.delete("/football/:id", deleteFootballResultController);
router.delete("/athletics/:id", deleteAthleteResultController);

export default router;
