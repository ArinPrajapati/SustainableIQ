import React, { useState } from "react";
import data from "../../assets/data.json";
import PostCard from "./PostCard";

interface PostData {
  title: string;
  subtitle: string;
  imgLink?: string; // Optional property for image link
  createdAt?: string; // Assuming createdAt is a string in ISO format
  updatedAt?: string; // Assuming updatedAt is a string in ISO format
  viewCont?: number;
  likeCont?: number;
  content?: string;
  authorId?: string; // Assuming authorId is a string
}

const PostHolder = () => {
  const [postData, setPostData] = useState<PostData[]>(data.data);

  return (
    <>
      <h1 className="text-center w-full text-[4rem] my-4 font-[1000] text-white">All Posts</h1>
      <div className="w-full flex gap-10 p-10 my-4">
        {postData.map((item: PostData, index: number) => (
          <PostCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            imgLink={item.imgLink}
          />
        ))}
      </div>
    </>
  );
};

export default PostHolder;
