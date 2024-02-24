import mongoose from "mongoose";

let db_url=process.env.MONGO_URI || "mongodb+srv://iit2022035:DevamDesai@clusterlearn.inj4tzw.mongodb.net/xenonTest?retryWrites=true&w=majority"

export const connectDB = async () => {
  await mongoose.connect(db_url, {
    useUnifiedTopology: true,
  });
  console.log("Connected to Database Successfully!");
};
