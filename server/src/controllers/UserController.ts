import User, { IUser } from "../model/UserModel";
import { Request, Response } from "express";
import bcytpt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

export class UserController {
  // getAlluser method for admin only
  public static async getAllUsers(
    req: Request,
    res: Response
  ): Promise<void | string | Response> {
    try {
      const users = await User.find();
      if (!users) {
        return res.status(500).json({ message: "No users found" });
      }
      res.status(200).json({ message: "success", users: users });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async createUser(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d]+/;
      if (specialCharsRegex.test(name)) {
        return res
          .status(400)
          .json({ message: "Name  must not contain special characters and numbers" });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must be at least 8 characters long" });
      }

      const salt = await bcytpt.genSalt(10);
      const hashedPassword = await bcytpt.hash(password, salt);

      const create = await User.create({
        username:name,
        email,
        password: hashedPassword,
      });
      if (!create) {
        return res.status(500).json({ message: "Error creating user" });
      }
      res.status(200).json({ message: create, status: "success" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async loginUser(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const isPasswordMatch = await bcytpt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const secret = process.env.JWT_SECRET as string;

      console.log(secret);

      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "1d",
      });
      if (!token) {
        return res.status(500).json({ message: "Error creating token" });
      }

      res
        .status(200)
        .json({ message: "User logged in successfully", token: token });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
  