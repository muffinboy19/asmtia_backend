import express from "express";

const router=express.Router()

router.get("/readleaderboard", (req, res) => {
    res.send("Leaderboard");
})

router.post("/createleaderboard", );

router.patch("/updateleaderboard/:id", );

router.delete("/deleteleaderboard/:id", );

export default router;