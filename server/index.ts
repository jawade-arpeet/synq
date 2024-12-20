import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error(error);
  });

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
