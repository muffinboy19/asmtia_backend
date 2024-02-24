import mongoose from "mongoose";
const { Schema, model } = mongoose;
//this is the second type of model for fixtures
//for multiplayer sport
const fixture2Schema = new Schema({
    EventType: {
        type: Schema.Types.String,
        default: "400m",
    },
    Sport: {
        type: Schema.Types.String,
        default: "Athletics",
    },
    Day: {
        type: Schema.Types.Number,
        default: 0,
    },
    Date: {
        type: Schema.Types.String,
    },
});

const Fixture2 = model("Fixture2", fixture2Schema);
export default Fixture2;
