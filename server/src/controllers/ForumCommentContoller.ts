import { Request, Response } from "express";
import ForumComment from "../model/ForumCommentModel";

export class ForumCommentController {
  public static async getMessage(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const comments = await ForumComment.find();
      if (!comments) {
        return res.status(500).json({ message: "No comments found" });
      }
      res.status(200).json({ message: "success", comments: comments });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async getCommentById(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;
      const comment = await ForumComment.findById(id);
      if (!comment) {
        return res.status(500).json({ message: "No comment found" });
      }
      res.status(200).json({ message: "success", comment: comment });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async deleteComment(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { id } = req.params;
      const deleteComment = await ForumComment.findByIdAndDelete(id);
      if (!deleteComment) {
        return res.status(500).json({ message: "Error deleting comment" });
      }
      res.status(200).json({ message: deleteComment });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public static async createMessage(
    req: Request,
    res: Response
  ): Promise<string | void | Response> {
    try {
      const { postId, authorId, content } = req.body;
      if (!postId || !authorId || !content) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const create = await ForumComment.create({
        postId,
        authorId,
        content,
      });

      if (!create) {
        return res.status(500).json({ message: "Error creating message" });
      }
      res.status(200).json({ message: create, status: "success" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
