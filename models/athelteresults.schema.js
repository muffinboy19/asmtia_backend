import mongoose from "mongoose";
const { Schema, model } = mongoose
//this is the second type of model for fixtures
const athleteSchema = new Schema({
    ClgImg1:{
        type: Schema.Types.String,
        ref: "ClgImg1",
        default: "https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
    },
    ClgImg2:{
        type: Schema.Types.String,
        ref: "ClgImg2",
        default: "https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
    },

    ClgName1:{
        type: Schema.Types.String,
        ref: "ClgName1",
        default: "IIIT-A",
    },
    ClgName2:{
        type: Schema.Types.String,
        ref: "ClgName2",
        default: "IIIT-A",
    },
    Date:{
        type: Schema.Types.String,
        ref: "Date",
        default: "12/12/2021",
    },
    GroupStage:{
        type: Schema.Types.String,
        ref: "GroupStage",
        default: "Semi Final",
    },
    MatchName:{
        type: Schema.Types.String,
        ref: "MatchName",
        default: "Relay - 500m",
    },
    Player1:{
        type: Schema.Types.String,
        ref: "Player1",
        default: "Devam Desai",
    },
    Player2:{
        type: Schema.Types.String,
        ref: "Player2",
        default: "Om B",
    },
    Player3:{
        type: Schema.Types.String,
        ref: "Player3",
        default: "Rahul",
    },
   
})

const AthleteResults = model("AthleteResults",athleteSchema );
export default AthleteResults;