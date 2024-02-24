import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.config.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/api/v1/fixtures/',);
app.use('/api/v1/results/',);
app.use('/api/v1/leaderboard/',);


app.get("/", (req, res) => {
    res.send("OK");
});



const PORT = process.env.PORT || 6969; //8000 or 6969, 8000 default
app.listen(PORT, async () => {
    try {
        console.log(`Server started successfully on port ${PORT} ! 🚀`);
        console.log("Waiting for DB...");
        await connectDB();
    } catch (err) {
        console.log("Error while starting server: ", err);
    }

});
