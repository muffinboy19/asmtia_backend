import {
    createFixture,
    deleteFixture,
    getAllFixtures,
    getByDay,
    getBySport,
    updateFixture,
} from "../controllers/fixtures.controllers.js";
import express from "express";

const router = express.Router();

router.get("/", getAllFixtures);
router.get("/:sport", getBySport);
router.get("/:sport/:day", getByDay);
router.post("/create", createFixture);
router.delete("/:id", deleteFixture);
router.patch("/:id", updateFixture);

export default router;
