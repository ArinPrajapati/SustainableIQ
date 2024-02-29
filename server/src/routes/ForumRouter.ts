import express from "express";
import { ForumPostController } from "../controllers/ForumPostController";

    const router = express.Router();

router.get("/", ForumPostController.getMessage);
router.post("/add", ForumPostController.createMessage);
router.delete("/delete/:id", ForumPostController.deleteMessage);
router.put("/addView/:id", ForumPostController.AddView);
router.put("/addLike/:id", ForumPostController.AddLike);
router.get("/get/:id", ForumPostController.getPostById);

export default router;
