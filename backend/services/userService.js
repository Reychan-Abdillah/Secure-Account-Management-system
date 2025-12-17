import bcrypt from "bcryptjs";
import {
  findByEmail,
  create,
  findById,
} from "../repositories/userRepository.js";
import AppError from "../utils/appError.js";

export async function createUser(email, password) {
  const checkUser = await findByEmail(email);
  if (checkUser) throw new AppError("Email already exists", 409);

  const hashedPassword = await bcrypt.hash(password, 10);

  await create({ email, password: hashedPassword });
}

export async function validateUser(email, password) {
  const checkUser = await findByEmail(email).select("+password");
  if (!checkUser) return null;

  const isMatch = await bcrypt.compare(password, checkUser.password);
  if (!isMatch) return null;

  return checkUser;
}

export async function validatePassword(userId, oldPassword) {
  const checkId = await findById(userId).select("+password");
  if (!checkId) throw new AppError("User not found", 404);

  const isMatch = await bcrypt.compare(oldPassword, checkId.password);
  if (!isMatch) throw new AppError("Old password is incorrect", 401);
}
