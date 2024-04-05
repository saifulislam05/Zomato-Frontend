import express from "express"
import userRoutes from "./Routes/user";

const app = express();



app.use("/user", userRoutes);

app.listen(10000,()=>console.log("Server is running on port 10000"))