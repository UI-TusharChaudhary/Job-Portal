import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    log: {
      type: String, //URL to company logo
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, //Reference to user who created the company
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
