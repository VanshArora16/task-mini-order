import mongoose from "mongoose";

const mongoDbURL = "";
export const CONNECTION = mongoose.connect(mongoDbURL);
