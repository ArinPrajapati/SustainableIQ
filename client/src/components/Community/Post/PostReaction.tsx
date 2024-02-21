import React from "react";
import data from "../../.././assets/data.json";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
const PostReaction = ({ postId }: { postId: string | undefined }) => {
  const postData = data.data.find((item) => item.id === postId);
  if (postData) {
    console.log(postId);
    console.log(postData);
  } else if (!postData) {
    console.log("no data");
    console.log(postId);
  }
  return (
    <div className="flex gap-4 w-full my-3 p-4 justify-end  text-[22px]">
      <p className="flex items-center">
        <GrView />
        {postData?.viewCont}
      </p>
      <p className="flex items-center">
        <AiOutlineLike />
        {postData?.likeCont}
      </p>
    </div>
  );
};

export default PostReaction;
