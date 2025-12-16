import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("error registered", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const checkUser = await User.findOne({ email }).select("+password");

    if (!checkUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, checkUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { id: checkUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: checkUser._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({ accessToken, refreshToken});

  } catch (error) {
    console.log("error login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
