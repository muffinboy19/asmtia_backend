import express from "express";
import { getLogs } from "../controllers/log.controllers.js";
const router = express.Router();

router.get("/", getLogs);

export default router;
