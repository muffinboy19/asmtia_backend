import mongoose from "mongoose";
const { Schema, model } = mongoose
//this is the second type of model for fixtures
const fixture1Schema = new Schema({
    DisplayName1: {
        type: Schema.Types.String,
        ref: "DisplayName1",
        default: "Devam Desai",
    },
    CollegeName1: {
        type: Schema.Types.String,
        ref: "CollegeName1",
        default: "IIIT-A",
    },
    DisplayName2: {
        type: Schema.Types.String,
        ref: "DisplayName2",
        default: "Om B",
    },
    CollegeName2: {
        type: Schema.Types.String,
        ref: "CollegeName2",
        default: "IIIT-A",
    },
    Type:{
        type: Schema.Types.String,
        ref: "Type",
        default: "Football",
    }
    }
)

const Fixture1 = model("Fixture1",fixture1Schema );

export default Fixture1;