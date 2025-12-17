import express from "express";
import {
  register,
  login,
  logout,
  refresh,
  updatePassword,
} from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";
import { validate } from "../middlewares/validate.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/logout", logout);
router.post("/refresh", refresh);
router.post("/update-password",authMiddleware, updatePassword )
export default router;
