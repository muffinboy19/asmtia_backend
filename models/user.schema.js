import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    Name: {
        type: Schema.Types.String,
        default: "User",
    },
    Role: {
        type: String,
        enum: ['volunteer', 'head', 'executive'],
        default: 'volunteer' 
    },
    Password:{
        type:String
    }
});

const User = model("User", userSchema);

export default User;
