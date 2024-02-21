import express from "express";
import { ForumCommentController } from "../controllers/ForumCommentContoller";

const router = express.Router();

router.get("/", ForumCommentController.getMessage);
router.delete("delete/:id", ForumCommentController.deleteComment);  
router.post("/add", ForumCommentController.createMessage);
export default router;
