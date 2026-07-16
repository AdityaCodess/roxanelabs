import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: "Tablets" | "Capsules" | "Syrups" | "Injectables" | "External";
  composition: string;
  description: string;
  indications: string[];
  packing: string;
  qualityStandards: string[];
  stockQuantity: number;
  lowStockThreshold: number;
  pricePerUnit: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    category: {
      type: String,
      enum: ["Tablets", "Capsules", "Syrups", "Injectables", "External"],
      required: true,
    },
    composition: { type: String, required: true },
    description: { type: String, required: true },
    indications: [{ type: String }],
    packing: { type: String, required: true, default: "10x10 Alu-Alu" },
    qualityStandards: [{ type: String, default: ["WHO-GMP", "ISO 9001:2015", "IP/BP/USP"] }],
    stockQuantity: { type: Number, required: true, default: 0, min: 0 },
    lowStockThreshold: { type: Number, required: true, default: 1000 },
    pricePerUnit: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;