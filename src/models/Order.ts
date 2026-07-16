import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IOrderItem {
  product: Types.ObjectId;
  quantity: number;
  unitPrice: number;
}

export interface IOrder extends Document {
  orderNumber: string;
  distributor: Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: "PENDING_VERIFICATION" | "IN_PRODUCTION" | "QA_TESTING" | "READY_FOR_DISPATCH" | "DELIVERED" | "CANCELLED";
  assignedBatchId?: string;
  productionZone?: string;
  estimatedDispatchDate?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema: Schema<IOrderItem> = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true },
});

const OrderSchema: Schema<IOrder> = new Schema(
  {
    orderNumber: { type: String, required: true, unique: true, uppercase: true, index: true },
    distributor: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "PENDING_VERIFICATION",
        "IN_PRODUCTION",
        "QA_TESTING",
        "READY_FOR_DISPATCH",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "PENDING_VERIFICATION",
      index: true,
    },
    assignedBatchId: { type: String, uppercase: true, trim: true }, // e.g., #ROX-2026-LIVE
    productionZone: { type: String, default: "Zone 1 — Raw Material Testing" },
    estimatedDispatchDate: { type: Date },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;