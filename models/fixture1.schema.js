import mongoose from "mongoose";
const { Schema, model } = mongoose;
//this is the second type of model for fixtures
//for two player sports
const fixture1Schema = new Schema({
    DisplayName1: {
        type: Schema.Types.String,
        default: "Devam Desai",
    },
    CollegeName1: {
        type: Schema.Types.String,
        default: "IIIT-A",
    },
    DisplayName2: {
        type: Schema.Types.String,
        default: "Om B",
    },
    CollegeName2: {
        type: Schema.Types.String,
        default: "IIIT-A",
    },
    Date: {
        type: Schema.Types.String,
    },
    Day: {
        type: Schema.Types.Number,
        default: 0,
    },
    Type: {
        type: Schema.Types.String,
        default: "Football",
    },
    Sport: {
        type: Schema.Types.String,
        default: "Football",
    },
    Data: {
        type: Schema.Types.String,
        default: null,
    },
});

const Fixture1 = model("Fixture1", fixture1Schema);

export default Fixture1;
