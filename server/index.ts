import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./routes";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
