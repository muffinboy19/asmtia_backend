


export const getResultsController= async (req,res)=>{
    try {
        const data=await resultModel.find({});
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