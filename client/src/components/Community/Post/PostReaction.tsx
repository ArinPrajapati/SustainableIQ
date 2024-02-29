import React from "react";
import data from "../../.././assets/data.json";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
const PostReaction = ({
  likes,
  views,
}: {
  likes: number | undefined;
  views: number | undefined;
}) => {
  return (
    <div className="flex gap-4 w-full my-3 p-4 justify-end  text-[22px]">
      <p className="flex items-center gap-2">
        <GrView />
        {views}
      </p>
      <p className="flex items-center gap-2">
        <AiOutlineLike />
        {likes}
        
      </p>
    </div>
  );
};

export default PostReaction;
