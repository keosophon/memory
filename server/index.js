// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import messageRouter from "./routes/messages.js";

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

app.use("/messages", messageRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running on port", process.env.PORT || 3000)
);
