import mongoose from "mongoose";
const dotenv = require("dotenv");

let isConnected = false; // track the connection

export const connectToDB = async () => {
 mongoose.set("strictQuery", true);

 if (isConnected) {
  console.log("MongoDB is already connected");
  return;
 }

 try {
  dotenv.config({ path: "./config.env" });
  await mongoose.connect(process.env.MONGODB_URI, {
   dbName: "share_prompt",
  });

  isConnected = true;

  console.log("MongoDB connected");
 } catch (error) {
  console.log(error);
 }
};
