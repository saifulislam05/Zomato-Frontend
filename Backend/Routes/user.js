import express from "express";
import signup from "../Controller/user/signup.js";
import getAllUser from "../Controller/user/getAllUser.js";
import login from "../Controller/user/login.js";



const router = express.Router();

router.post("/signup", signup)

router.post("/login", login);


router.get("/",   getAllUser);

export default router;