import express from "express";

const router=express.Router()

router.get("/readfixture", (req, res) => {
    res.send("fixture");
})

router.post("/createfixture", );

router.patch("/updatefixture/:id", );

router.delete("/deletefixture/:id", );

export default router;