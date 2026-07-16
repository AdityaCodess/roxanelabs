import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IAuditLog extends Document {
  actor: Types.ObjectId;
  actorRole: "PARTNER" | "ADMIN";
  actionType: "INVENTORY_OVERRIDE" | "ORDER_STATUS_CHANGE" | "KYC_APPROVAL" | "SECURITY_ALERT" | "SYSTEM_LOGIN";
  targetResource: string;
  description: string;
  ipAddress?: string;
  metadata?: Record<string, any>;
  timestamp: Date;
}

const AuditLogSchema: Schema<IAuditLog> = new Schema(
  {
    actor: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    actorRole: { 
      type: String, 
      enum: ["PARTNER", "ADMIN"],
      required: true 
    },
    actionType: {
      type: String,
      enum: [
        "INVENTORY_OVERRIDE",
        "ORDER_STATUS_CHANGE",
        "KYC_APPROVAL",
        "SECURITY_ALERT",
        "SYSTEM_LOGIN",
      ],
      required: true,
      index: true,
    },
    targetResource: { type: String, required: true },
    description: { type: String, required: true },
    ipAddress: { type: String },
    metadata: { type: Schema.Types.Mixed },
    timestamp: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: false,
  }
);

const AuditLog: Model<IAuditLog> = mongoose.models.AuditLog || mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);

export default AuditLog;