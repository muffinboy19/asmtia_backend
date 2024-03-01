import Leaderboard from "../models/leaderboard.schema.js";
import mongoose from "mongoose";
export const getLeaderboard = async (req, res) => {
    try {
        const data = await Leaderboard.find().sort({ Points: -1 });
        res.status(200).send({
            success: true,
            message: "Fetched Successfully",
            data
        }
        );
    } catch (error) {
        console.log(error);
        res.send(500).json({ message: error.message });
    }
}

export const updateLeaderboardEntry = async (req, res) => {
    const { id } = req.params;
    const newPoints = req.body.Points;

    try {
        // If not valid
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ message: `Invalid entry id: ${id}` });
        
        const updatedEntry = await Leaderboard.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        updatedEntry.save();
        console.log(updatedEntry);
        if (!updatedEntry)
            return res.status(404).json({ message: `Leaderboard entry not found with id: ${id}` });

        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
