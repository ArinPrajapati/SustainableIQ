import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useCreatePostCommentMutation } from "@/store/api/postCommet";
import { title } from "process";
import { toast } from "react-toastify";

interface props {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  postid: string;
}
const CommentModel = (props: props) => {
  const [createPostComment, { isLoading, data }] =
    useCreatePostCommentMutation();
  const [comment, setComment] = React.useState({
    content: "",
    postId: props.postid,
    name: "",
    title: "",
  });

  const createComment = () => {
    const CommentedPosts = JSON.parse(
      localStorage.getItem("CommentedPosts") || "[]"
    );

    if (CommentedPosts.includes(props.postid)) {
      toast.error("Post is already Commented");
      return;
    }
    if (!comment.name) {
      toast.error("Name cannot be empty");
      return;
    }
    if (!comment.content) {
      toast.error("Comment cannot be empty");
      return;
    }
    try {
      createPostComment(comment);
      setComment({
        content: "",
        postId: props.postid,
        name: "",
        title: "",
      });
      toast.success("Commented successfully");
      CommentedPosts.push(props.postid);
      localStorage.setItem("CommentedPosts", JSON.stringify(CommentedPosts));
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      props.setopen(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-[rgba(33,30,56,0.5)] backdrop-blur-[1px] flex justify-center items-center z-50 ">
      <div className="w-[350px] md:w-[500px] h-[600px] bg-black p-5 rounded-xl md:scale-120 relative">
        <Button
          className="absolute top-0 right-0 active:scale-75 px-3 hover:bg-slate-800 bg-transparent rounded-full text-red-500 text-2xl"
          onClick={() => props.setopen(false)}
        >
          x
        </Button>
        <CardHeader>
          <CardTitle className="text-center ">New Comment</CardTitle>

          <CardDescription className="text-center">
            Share your thoughts with the community
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="name">Name</Label>
            <Input
              autoComplete="name"
              id="name"
              placeholder="Elise Stevens"
              type="text"
              value={comment.name}
              onChange={(e) => setComment({ ...comment, name: e.target.value })}
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              autoComplete="title"
              id="title"
              placeholder="Title for your comment"
              type="text"
              value={comment.title}
              onChange={(e) =>
                setComment({ ...comment, title: e.target.value })
              }
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              autoComplete="comment"
              id="comment"
              placeholder="Your comment"
              rows={8}
              value={comment.content}
              onChange={(e) =>
                setComment({ ...comment, content: e.target.value })
              }
            />
          </div>
          <Button className="w-full" type="submit" onClick={createComment}>
            {isLoading ? "Commenting..." : "Comment"}
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default CommentModel;
