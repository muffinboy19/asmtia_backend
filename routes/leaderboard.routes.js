import express from "express";

const router=express.Router()

router.get("/readleaderboard", (req, res) => {
    res.send("Leaderboard");
})

router.post("/createleaderboard", );

router.patch("/updateleaderboard", );

router.delete("/deleteleaderboard", );

export default router;