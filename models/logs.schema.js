import mongoose from "mongoose";
const { Schema, model } = mongoose;
//this is the second type of model for fixtures
const logSchema = new Schema({
    time: {
        type: Date,
        default: Date.now(),
    },
});

const AthleteResults = model("AthleteResults", athleteSchema);
export default AthleteResults;
