import express from "express";
import { UserController } from "../controllers/UserController";
const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/create", UserController.createUser);
router.post("/login", UserController.loginUser);

export default router;          
