import express from "express";
import signup from "../Controller/user/signup.js";
import getAllUser from "../Controller/user/getAllUser.js";



const router = express.Router();

router.post("/signup", signup)

router.get("/",   getAllUser);

export default router;