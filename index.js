import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import statusMonitor from "express-status-monitor";

import { connectDB, connectRedis } from "./config/db.config.js";
import appRouter from "./routes/api.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(statusMonitor());

// Routes
app.use("/api", appRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        console.log("🔌 Connecting to MongoDB...");
        await connectDB();

        console.log("🔁 Connecting to Redis (if in production)...");
        await connectRedis();

        app.listen(PORT, () => {
            console.log(`🚀 Server started successfully on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Error while starting server:", err);
        process.exit(1); // Optional: exit process on fatal error
    }
};

startServer();
