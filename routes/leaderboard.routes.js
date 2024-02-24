import express from "express";

const router=express.Router()

router.get("/readleaderboard", (req, res) => {
    res.send("Leaderboard");
})

router.post("/leaderboard", );

router.patch("/leaderboard/:id", );

router.delete("/leaderboard/:id", );

export default router;