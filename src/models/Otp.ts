import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOtp extends Document {
  email: string;
  code: string;
  createdAt: Date;
}

const OtpSchema: Schema<IOtp> = new Schema({
  email: { type: String, required: true, lowercase: true, index: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: 600 } }, // Auto-deletes after 10 mins (600 seconds)
});

const Otp: Model<IOtp> = mongoose.models.Otp || mongoose.model<IOtp>("Otp", OtpSchema);

export default Otp;