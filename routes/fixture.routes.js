import express from "express";

const router=express.Router()

router.get("/readfixture", (req, res) => {
    res.send("fixture");
})

router.post("/createfixture", );

router.patch("/updatefixture", );

router.delete("/deletefixture", );

export default router;