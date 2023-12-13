import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["Customer", "Manager"],
    default: "Customer",
  },
  createdAt: { type: Date, default: Date.now() },
});

export const User = mongoose.model("user", userSchema);
