import { Request, Response } from "express";
import ForumPost from "../model/ForumPost";
import { promises } from "dns";
export class ForumPostController {
  public static async getMessage(req: Request, res: Response): Promise<void> {
    try {
      const find = await ForumPost.find();
      res.status(200).json({ post: find });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async createMessage(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { title, subtitle, content, authorName, imgLink } = req.body;
      if (!title || !subtitle || !content || !authorName) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const create = await ForumPost.create({
        title,
        subtitle,
        content,
        authorName,
        imgLink,
      });

      if (!create) {
        return res.status(500).json({ message: "Error creating message" });
      }
      res.status(200).json({ message: create });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async deleteMessage(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;
      const deleteMessage = await ForumPost.findByIdAndDelete(id);
      if (!deleteMessage) {
        return res.status(500).json({ message: "Error deleting message" });
      }
      res.status(200).json({ message: deleteMessage });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async AddView(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;
      const addView = await ForumPost.updateOne(
        { _id: id },
        { $inc: { viewCont: 1 } }
      );
      if (!addView) {
        return res.status(500).json({ message: "Error adding view" });
      }
      res.status(200).json({ message: addView });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async AddLike(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;

      const addLike = await ForumPost.updateOne(
        { _id: id },
        { $inc: { likeCont: 1 } }
      );

      if (!addLike) {
        return res.status(500).json({ message: "Error adding like" });
      }
      res.status(200).json({ message: addLike });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async getPostById(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;
      const post = await ForumPost.findById(id);
      if (!post) {
        return res.status(500).json({ message: "No post found" });
      }
      res.status(200).json({ message: "success", post: post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
