import express from "express";
import { ForumPostController } from "../controllers/ForumPostController";

const router = express.Router();

router.get("/", ForumPostController.getMessage);
router.post("/add", ForumPostController.createMessage);
router.delete("/:id", ForumPostController.deleteMessage);

export default router;
