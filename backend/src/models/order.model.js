import mongoose from "mongoose";

// Order Schema
const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "InventoryItem" }],
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
});

export const Order = mongoose.model("order", orderSchema);
