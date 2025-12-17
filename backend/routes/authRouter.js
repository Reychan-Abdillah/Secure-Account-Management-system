import express from "express";
import {
  register,
  login,
  logout,
  refresh,
} from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";
import { validate } from "../middlewares/validate.js";

const router = express();

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/logout", logout);
router.post("/refresh", refresh);

export default router;
