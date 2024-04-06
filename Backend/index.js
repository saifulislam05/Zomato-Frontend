import express from "express"
import mongoose from "mongoose";
import userRoutes from "./Routes/user.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(console.log("Database connected Successfully"))
  .catch((err) => console.log(`Database connection failed error : ${err}`));

app.use("/v1/api/user", userRoutes);

//localhost:10000/v1/api

http: app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);