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

interface props {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  postid: string;
}
const CommentModel = (props: props) => {
  return (
    <div className="fixed inset-0 bg-[rgba(33,30,56,0.5)] backdrop-blur-[1px] flex justify-center items-center z-10 ">
      <div className="w-[350px] md:w-[500px] h-[600px] bg-black p-5 rounded-xl md:scale-120 relative">
        <Button
          className="absolute top-0 right-0 active:scale-75 px-3 hover:bg-slate-800 rounded-full text-red-500 text-2xl"
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
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              autoComplete="title"
              id="title"
              placeholder="Title for your comment"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              autoComplete="comment"
              id="comment"
              placeholder="Your comment"
              rows={8}
            />
          </div>
          <Button className="w-full" type="submit">
            Comment
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default CommentModel;
