import User from "../models/user.js";

export function findByEmail(email) {
  return User.findOne({ email })
}

export function create(userData) {
 return User.create(userData);
}

export function findById(userId) {
   return User.findById(userId);
}