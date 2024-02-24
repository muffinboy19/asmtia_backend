import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Leaderboard");
});

router.post("/create");

router.patch("/update/:id");

router.delete("/delete/:id");

export default router;
