import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// create a user
const createUser = asyncHandler(async (req, res) => {
  // console.log("Working");
  // console.log(req.body);
  const email = req.body.email;
  // console.log(email);
  const findUser = await User.findOne({email: email});
  if (!findUser) {
    // create user
    const newUser = await User.create(req.body);
    res.json(newUser);
  }else {
    // user already exists
    res.json({
      message: "User Already Exists",
      success: false
    });
  }
});

export { createUser };
