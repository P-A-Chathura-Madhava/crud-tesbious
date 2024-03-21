import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { json } from "express";

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

// update a user
const updateAUser = asyncHandler(async (req, res) => {
  // console.log("update a user");
  const { _id } = req.params;
  // console.log(_id);
  // console.log(req?.body?.name);
  // console.log(req?.body?.email);
  // console.log(req?.body?.location);
  try {
    const updatedUser = await User.findByIdAndUpdate(_id, {
      name: req?.body?.name,
      email: req?.body?.email,
      location: req?.body?.location
    },
    {
      new: true
    });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

export { createUser, getAllUsers, getAUser, updateAUser };
