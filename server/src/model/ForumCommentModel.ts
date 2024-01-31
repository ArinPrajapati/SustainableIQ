import mongoose, { Schema, Document } from "mongoose";

interface IForumComment extends Document {
  postId: mongoose.Schema.Types.ObjectId;
  authorId: mongoose.Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const ForumCommentSchema: Schema = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ForumPost",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const ForumComment = mongoose.model<IForumComment>(
  "ForumComment",
  ForumCommentSchema
);
export default ForumComment;
