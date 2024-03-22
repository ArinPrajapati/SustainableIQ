import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { timeNormal } from "@/helpers/timeNormal";
import { Label } from "@radix-ui/react-label";
import React from "react";


interface props {
  postId: string;
}
const Comments = (prop: props) => {
  return (
    <div className="flex justify-center p-4">
      <div className="text-white border border-white w-[500px] h-fit rounded-md">
        <CardHeader>
          <CardTitle className=" ">User</CardTitle>
          <CardDescription className="">
            {timeNormal("2024-02-09T14:05:29.735+00:00")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Title of the Comment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              autem quam modi iure cumque cupiditate consectetur quis assumenda,
              dignissimos aliquam ex necessitatibus amet quos repellat, vero in
              nesciunt officiis voluptatum?
            </p>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default Comments;
