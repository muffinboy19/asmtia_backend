import express from "express";

const router=express.Router()

router.get("/readallresults", (req, res) => {
    res.send("Get all results");
})

router.post("/createcricketresult", );
router.post("/createfootballresult",);
router.post("/createathleticresult", );

router.patch("/updatecricketresult", );
router.patch("/updatefootballresult", );
router.patch("/updateathleticresult", );

export default router;