import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "PARTNER" | "ADMIN";
  companyName?: string;
  gstNumber?: string;
  isKycApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ["PARTNER", "ADMIN"],
      default: "PARTNER",
      required: true,
    },
    companyName: { type: String, trim: true },
    gstNumber: { type: String, uppercase: true, trim: true },
    isKycApproved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite upon Next.js hot compilation
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;