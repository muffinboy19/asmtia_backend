import AthleteResults from "../models/athelteresults.schema.js";
import FootballResults from "../models/footballresults.schema.js";
import CricketResults from "../models/cricketresults.schema.js";

export const getResultsController= async (req,res)=>{
    try {

        const footballResults = await FootballResults.find({});
        const cricketResults = await CricketResults.find({});
        const athleteResults = await AthleteResults.find({});

        const data = [];
        data.push(...footballResults);
        data.push(...cricketResults);
        data.push(...athleteResults);
        
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
        const newResult= await FootballResults.findByIdAndUpdate(id,{
            ...req.body,
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
        const newResult= await CricketResults.findByIdAndUpdate(id,{
            ...req.body,
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
        const newResult= await AthleteResults.findByIdAndUpdate(id,{
            ...req.body,
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

export const createFootballResultController=async (req,res)=>{
    try {
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
                    Score,
                    Type:"football"

                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
           
    } catch (error) {
        res.send(201).send({
            success:false,
            message: "Error in creating result",
            error: error.message
        })
    }
}




export const createAthleteResultController=async (req,res)=>{
    try {          
            console.log(req.body);
                const { Date,GroupStage,MatchName,Player1,Player2,Player3 } = req.body;
                console.log(Date);
                if(!Date ) return res.status(500).send({error:"Date"});
                if(!Date||!GroupStage||!MatchName||!Player1 ||!Player2||!Player3){
                    return res.status(500).send({error:"Insufficient Data3"});
                }
                const newResult = await new AthleteResults({
                    Date, 
                    GroupStage,
                    MatchName,
                    Player1,
                    Player2,
                    Player3,
                    Type:"athlete"
                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
        
    } catch (error) {
        res.send(201).send({
            success:false,
            message: "Error in creating result",
            error: error.message
        })
    }
}





export const createCricketResultController=async (req,res)=>{
    try {
            const {type}=req.body;
            
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
                    Score2,
                    Type:"cricket"
                })
                .save();
                res.status(201).send({
                    success:true,
                    message:'Result Created',
                    newResult
                })
        
    } catch (error) {
        res.send(201).send({
            success:false,
            message: "Error in creating result",
            error: error.message
        })
    }
}





export const deleteAthleteResultController= async (req,res)=>{
    try {
        const prod=await AthleteResults.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Delete",
            error
        })
    }
};


export const deleteFootballResultController= async (req,res)=>{
    try {
        const prod=await FootballResults.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Delete",
            error
        })
    }
};
export const deleteCricketResultController= async (req,res)=>{
    try {
        const prod=await CricketResults.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Delete",
            error
        })
    }
};