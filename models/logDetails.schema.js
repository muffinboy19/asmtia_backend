import mongoose from "mongoose";
const { Schema, model } = mongoose;

const logSchema = new Schema({
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    typeChanged: {
        type: String,
        enum: ['result', 'fixture', 'leaderboard']
    },
    timestamps: true
});

const LogDetails = model("LogDetails", logSchema);

export default LogDetails;
