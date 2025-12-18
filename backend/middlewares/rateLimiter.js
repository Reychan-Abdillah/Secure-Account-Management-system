import rateLimit from "express-rate-limit";

const updatePasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many password change attempts, please try again later",
  },
});

export default updatePasswordLimiter