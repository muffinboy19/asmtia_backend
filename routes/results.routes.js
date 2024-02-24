import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all results");
});

router.post("/cricket");
router.post("/football");
router.post("/athletics");

router.patch("/cricket/:id");
router.patch("/football/:id");
router.patch("/athletics/:id");

router.delete("/cricket/:id");
router.delete("/football/:id");
router.delete("/athletics/:id");

export default router;
