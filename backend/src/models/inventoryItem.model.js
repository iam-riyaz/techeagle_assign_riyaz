import mongoose from "mongoose";

// Inventory Item Schema
const inventoryItemSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productImage: { type: String },
  productDescription: { type: String },
  weight: { type: String },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
});

export const InventoryItem = mongoose.model(
  "inventoryItem",
  inventoryItemSchema
);
