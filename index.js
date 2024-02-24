import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("OK");
});

const PORT = process.env.PORT || 2121; //6969 or 2121, 6969 default
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ! 🚀`);
    connectDB();
});
