import express from "express";
import { createUser, getAUser, getAllUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-a-user/:_id", getAUser);

export default router;