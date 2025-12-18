import connectDB from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

connectDB();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
