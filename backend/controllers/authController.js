import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import {
  createUser,
  validateUser,
  validatePassword,
} from "../services/userService.js";
import { findById } from "../repositories/userRepository.js";

dotenv.config();

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    await createUser(email, password);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const checkUser = await validateUser(email, password);
    if (!checkUser) {
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

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
    });

    return res.status(200).json({ accessToken });
  } catch (error) {
    console.log("error login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error logout", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function refresh(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token" });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    return res.status(200).json({ accessToken });
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(401)
        .json({ message: "Invalid or expired refresh token" });
    }

    console.log("Internal server error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updatePassword(req, res) {
  const userId = req.user.id;
  const { oldPassword, newPassword } = req.body;

  try {
    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Old and new password are required" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters" });
    }

    await validatePassword(userId, oldPassword);

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await findById(userId);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
}
