import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { timeNormal } from "@/helpers/timeNormal";
import { useGetCommentsPostIdQuery } from "@/store/api/postCommet";
import { Label } from "@radix-ui/react-label";
import React, { useEffect } from "react";

interface props {
  postId: string;
}
interface dataType {
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  title: string;
}
const Comments = (prop: props) => {
  const { postId } = prop;
  const { data } = useGetCommentsPostIdQuery(postId);

 

  return (
    <>
      <h1 className="text-4xl font-semibold text-white text-center">Comments</h1>

      <div className="flex justify-center p-4 mt-3 flex-wrap gap-16 ">
        { data?.comment?.length === 0 ? (
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-semibold text-gray-100">404</h1>
            <p className="mb-4 text-lg text-gray-200">
              Oops! Looks like there are no comments.
            </p>
            <div className="animate-bounce">
              <svg
                className="mx-auto h-16 w-16 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </div>
            <p className="mt-4 text-gray-200">
              You can be the first to comment.
            </p>
          </div>
        ) : (
          data?.comment?.map((item: dataType, index) => (
            <div
              key={item._id}
              className="text-white border border-white w-[500px] h-fit rounded-md"
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{timeNormal(item.createdAt)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </CardContent>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Comments;
