import EmpLeaderboard from "../models/empLeaderboard.scehma.js";
import LogDetails from "../models/logDetails.schema.js";
import User from "../models/user.schema.js";
import mongoose from "mongoose";
import { getCache, setCache } from "../utils/cache.js";
export const getLeaderboard = async (req, res) => {
    try {
        const cached = await getCache("empLeaderboard");
        if (cached) {
            return res.status(200).send({
                success: true,
                message: "Fetched Successfully",
                data: JSON.parse(cached),
            });
        } else {
            const data = await EmpLeaderboard.find().sort({ Points: -1 });
            await setCache("empLeaderboard", JSON.stringify(data));
            res.status(200).send({
                success: true,
                message: "Fetched Successfully",
                data,
            });
        }
    } catch (error) {
        console.log(error);
        res.send(500).json({ message: error.message });
    }
};

export const updateLeaderboardEntry = async (req, res) => {
    const { id } = req.params;
    const newPoints = req.body.points;

    try {
        // If not valid
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ message: `Invalid entry id: ${id}` });

        const updatedEntry = await EmpLeaderboard.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        updatedEntry.save();
        console.log(updatedEntry);
        if (!updatedEntry)
            return res.status(404).json({
                message: `Leaderboard entry not found with id: ${id}`,
            });

        const workingUser = await User.findById(req.user.id);
        const newLog = await LogDetails.create({
            User: workingUser,
            typeChanged: "leaderboard",
        });
        res.status(200).json(updatedEntry, { Log_Details: newLog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
