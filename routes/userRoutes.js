import express from "express";
import { createUser, deleteAUser, getAUser, getAllUsers, updateAUser } from "../controller/userController.js";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-a-user/:_id", getAUser);
router.put("/update-a-user/:_id", updateAUser);
router.delete("/delete-a-user/:_id", deleteAUser);

export default router;