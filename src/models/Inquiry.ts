import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "UNREAD" | "READ" | "RESPONDED";
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema: Schema<IInquiry> = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["UNREAD", "READ", "RESPONDED"],
      default: "UNREAD",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);

export default Inquiry;