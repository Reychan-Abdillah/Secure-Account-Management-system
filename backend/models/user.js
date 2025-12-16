import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true, 
    trim: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    minlength: 6,
    select: false
  }
})

export default mongoose.model("User", userSchema)
