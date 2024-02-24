import AthleteResults from "../models/athelteresults.schema";
import FootballResults from "../models/footballresults.schema";
import CricketResults from "../models/cricketresults.schema";

export const getResultsController= async (req,res)=>{
    try {

        const footballResults= await FootballResults.find({});
        const cricketResults= await CricketResults.find({});
        const athleteResults= await AthleteResults.find({});

        var data=footballResults.append(cricketResults).append(athleteResults);
        
        res.status(200).send({
            success:true,
            message:"Fetched Successfully",
            data
        }
        );
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in getting results",
            error:error.message
        })
    }
};

export const updateFootballResultController= async (req,res)=>{
    try {
        const id= req.params.id;
        const { ClgImg1,ClgImg2,ClgName1,ClgName2, Date, GroupStage,MatchName,Score } = req.body;
        if(!ClgImg1||!ClgImg2||!ClgName1||!ClgName2|| !Date||!GroupStage||!MatchName||!Score){
            return res.status(500).send({error:"Insufficient Data"});
        }
        const newResult= await new FootballResults.findByIdAndUpdate({id:id},{
            ...req.fields,
        },{new:true});
        await newResult.save();
        
        
        res.status(201).send({
            success:true,
            message:'Result Updated',
            newResult
        });
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in updating results",
            error:error.message
        })
    }
};


export const updateCricketResultController= async (req,res)=>{
    try {
        const id= req.params.id;
        const { ClgImg1,ClgImg2,ClgName1,ClgName2, Date, GroupStage,MatchName,Over1,Over2,Score1,Score2 } = req.body;
        if(!ClgImg1||!ClgImg2||!ClgName1||!ClgName2|| !Date||!GroupStage||!MatchName||!Score1 ||!Score2||!Over1||!Over2){
            return res.status(500).send({error:"Insufficient Data"});
        }
        const newResult= await new CricketResults.findByIdAndUpdate({id:id},{
            ...req.fields,
        },{new:true});
        await newResult.save();
        res.status(201).send({
            success:true,
            message:'Result Updated',
            newResult
        });
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in updating results",
            error:error.message
        })
    }
};

export const updateAtheleteResultController= async (req,res)=>{
    try {
        const id= req.params.id;
        const { Date, GroupStage,MatchName,Player1,Player2,Player3 } = req.body;
        if(!Date||!GroupStage||!MatchName||!Player1 ||!Player2||!Player3){
            return res.status(500).send({error:"Insufficient Data"});
        }
        const newResult= await new AthleteResults.findByIdAndUpdate({id:id},{
            ...req.fields,
        },{new:true});
        await newResult.save();
        res.status(201).send({
            success:true,
            message:'Result Updated',
            newResult
        });
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in updating results",
            error:error.message
        })
    }
};

export const createResultController=async (req,res)=>{
    try {
            const {type}=req.body;
            if(type==0){//athlete
                const { Date, GroupStage,MatchName,Player1,Player2,Player3 } = req.body;
                if(!Date||!GroupStage||!MatchName||!Player1 ||!Player2||!Player3){
                    return res.status(500).send({error:"Insufficient Data"});
                }


                const newResult = await new AthleteResults({
                    Date, 
                    GroupStage,
                    MatchName,
                    Player1,
                    Player2,
                    Player3
                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
                

            }
            else if(type==1){//football
                const { ClgImg1,ClgImg2,ClgName1,ClgName2, Date, GroupStage,MatchName, Score } = req.body;
                if(!ClgImg1||!ClgImg2||!ClgName1||!ClgName2|| !Date||!GroupStage||!MatchName||!Score){
                    return res.status(500).send({error:"Insufficient Data"});
                }
                const newResult = await new FootballResults({
                    ClgImg1,
                    ClgImg2,
                    ClgName1,
                    ClgName2, 
                    Date,
                    GroupStage,
                    MatchName, 
                    Score
                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
            }
            else if(type==2){//cricket
                const { ClgImg1,ClgImg2,ClgName1,ClgName2, Date, GroupStage,MatchName,Over1,Over2,Score1,Score2 } = req.body;
                if(!ClgImg1||!ClgImg2||!ClgName1||!ClgName2|| !Date||!GroupStage||!MatchName||!Score1 ||!Score2||!Over1||!Over2){
                    return res.status(500).send({error:"Insufficient Data"});
                }

                const newResult = await new CricketResults({
                    ClgImg1,
                    ClgImg2,
                    ClgName1,
                    ClgName2,
                    Date, 
                    GroupStage,
                    MatchName,
                    Over1,
                    Over2,
                    Score1,
                    Score2
                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
                
            }
            else{
                res.send(422).send({
                    success:false,
                    message: "Invalid Result Type"
                })
            }
        
    } catch (error) {
        res.send(201).send({
            success:false,
            message: "Error in creating result",
            error: error.message
        })
    }
}
