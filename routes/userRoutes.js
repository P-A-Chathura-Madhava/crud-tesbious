import express from "express";
import { createUser, getAUser, getAllUsers, updateAUser } from "../controller/userController.js";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-a-user/:_id", getAUser);
router.put("/update-a-user/:_id", updateAUser);

export default router;