import {
    createFixture,
    getByDay,
    getBySport,
} from "../controllers/fixtures.controllers.js";
import express from "express";

const router = express.Router();

router.get("/:sport", getBySport);
router.get("/:sport/:day", getByDay);
router.post("/create", createFixture);

export default router;
