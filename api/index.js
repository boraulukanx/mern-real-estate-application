import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //used for initialise dotenv package

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  }); //used for hiding password

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
