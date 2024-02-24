import mongoose from "mongoose";
const { Schema, model } = mongoose
//this is the second type of model for fixtures
const fixture2Schema = new Schema({
    EventType:{
        type: Schema.Types.String,
        ref: "EventType",
        default: "Football",
    },
})

const Fixture2 = model("Fixture2",fixture2Schema );
export default Fixture2;