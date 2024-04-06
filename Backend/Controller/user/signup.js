import bcrypt from "bcryptjs";
import userModel from "../../models/user/user.js";

const signup = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const newUser = new userModel({
    ...req.body,
    password: hash,
  });
  try {
    
    await newUser.save();
    res.json({
      success: true,
      message: "user signed up successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There is something error",
      error: error,
    });
  }
};

export default signup;
