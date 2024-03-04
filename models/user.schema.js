import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    Name: {
        type: Schema.Types.String,
        default: "IIIT-A",
    },
    Role: {
        type: String,
        enum: ['Volunteer', 'Head', 'Executive'],
        default: 'Volunteer' // Set default role as 'user'
    }
});

const User = model("User", userSchema);

export default User;
