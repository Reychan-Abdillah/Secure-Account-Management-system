import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createUser, validateUser } from "../services/userService.js";

dotenv.config();

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    await createUser(email, password);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.message === "EMAIL_ALREADY_EXISTS") {
      return res.status(409).json({ message: "Email already registered" });
    }
    console.log("error registered", error);
    return res.status(500).json({ message: "Internal server error" });
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
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/auth/refresh",
  });
  res.status(200).json({ message: "Logout successful" });
}

export async function refresh(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token" });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid refresh token" });
      }

      const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });
      res.status(200).json({ accessToken });
    });
  } catch (error) {
    console.log("Internal server error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
