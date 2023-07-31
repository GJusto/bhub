import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function DbConnectionTest() {
  await mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB Connected");
  });
}

export { DbConnectionTest };
