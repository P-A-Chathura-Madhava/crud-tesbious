import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// create a user
const createUser = asyncHandler(async (req, res) => {
  // console.log("Working");
  // console.log(req.body);
  const email = req.body.email;
  // console.log(email);
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // user already exists
    res.json({
      message: "User Already Exists",
      success: false,
    });
  }
});

// get all users
const getAllUsers = asyncHandler(async (req, res) => {
  // console.log("get all users");
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

// get a user
const getAUser = asyncHandler(async (req, res) => {
  // console.log("get a user");
  const { _id } = req.params;
  // console.log(_id);
  try {
    const foundUser = await User.findById(_id);
    res.json(foundUser);
  } catch (error) {
    console.log(error);
  }
});

export { createUser, getAllUsers, getAUser };
