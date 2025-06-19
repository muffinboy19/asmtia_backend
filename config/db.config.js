import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { createClient } from "redis";

// REDIS CLIENT
export const client = createClient({
    url: process.env.CACHE_URI,
});

// Optional Redis connection
export const connectRedis = async () => {
    if (process.env.NODE_ENV === "production") {
        client.on("error", (err) => console.error("Redis Client Error:", err));
        client.on("connect", () =>
            console.log("✅ Connected to Redis Successfully! ✨")
        );

        await client.connect();
    }
};

// MongoDB connection
export const connectDB = async () => {
    const db_url = process.env.MONGO_URI;

    if (!db_url) {
        throw new Error("❌ MONGO_URI is undefined. Please check your .env file.");
    }

    await mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB Successfully! ✨");
};
