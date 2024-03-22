import mongoose, { Schema, Document } from "mongoose";

interface IForumPost extends Document {
  title: string;
  content: string;
  authorId: mongoose.Schema.Types.ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
}

const ForumPostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
    authorName: {
      type: String,
      required: true,
    },
    imgLink: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    viewCont: { type: Number, default: 0 },
    likeCont: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const ForumPost = mongoose.model<IForumPost>("ForumPost", ForumPostSchema);
export default ForumPost;
