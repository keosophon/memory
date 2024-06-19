// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3000, () => console.log("Server is running on port 3000"));
