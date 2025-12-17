import User from "../models/user.js";
import bcrypt from "bcryptjs";

export async function createUser(email, password) {
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
       throw new Error("EMAIL_ALREADY_EXISTS");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ email, password: hashedPassword });
  } catch (error) {
    console.error("Error createUser:", error);
    throw error;
  }
}

export async function validateUser(email, password) {
  const checkUser = await User.findOne({ email }).select("+password");
  if (!checkUser) return null;

  const isMatch = await bcrypt.compare(password, checkUser.password);
  if (!isMatch) return null;

  return checkUser;
}
