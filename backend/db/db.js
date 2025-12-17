import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.DATABASE_URL;

async function connectDB() {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
}

export default connectDB