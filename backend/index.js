import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";
import batchRoutes from "./routes/batchesRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Logic to connect to Database:
async function connectToDB() {
  try {
    const MONGO_URL =
      process.env.MONGO_URL || "mongodb://localhost:27017/quizflow";
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected To DB!!...");
    await seedAdminUser();
  }  catch (err) {
    console.log("❌ DB Connection Failed...", err);
    throw err;
  }
}

async function seedAdminUser() {
  try {
    const adminExists = await User.findOne({ role: "admin" });
    if (!adminExists) {
      const adminUser = new User({
        name: "Admin",
        email: "admin@quizflow.com",
        password: "admin123",
        role: "admin",
      });
      await adminUser.save();
      console.log("✅ Default admin user created:");
      console.log("   Email: admin@quizflow.com");
      console.log("   Password: admin123");
    } else {
      console.log("✅ Admin user already exists");
    }
  } catch (err) {
    console.log("❌ Admin seeding failed:", err.message);
  }
}

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server Is Running Perfectly!!");
});

app.use("/user", userRoutes);
app.use("/batch", batchRoutes);
app.use("/quiz", quizRoutes);

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectToDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server could not start:", err);
    process.exit(1);
  }
}

startServer();
// npm init -y
// npm i express cors mongoose
// npm i nodemon -g
// npm run dev
