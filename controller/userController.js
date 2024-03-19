import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// create a user
const createUser = asyncHandler(async (req, res) => {
  console.log("Working");
});

export { createUser };
