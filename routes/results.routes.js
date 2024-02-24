import express from "express";

const router=express.Router()

router.get("/readallresults", (req, res) => {
    res.send("Get all results");
})

router.post("/createcricketresult", );
router.post("/createfootballresult",);
router.post("/createathleticresult", );

router.patch("/updatecricketresult/:id", );
router.patch("/updatefootballresult/:id", );
router.patch("/updateathleticresult/:id", );

router.delete("/deletecricketresult/:id", );
router.delete("/deletefootballresult/:id", );
router.delete("/deleteathleticresult/:id", );

export default router;