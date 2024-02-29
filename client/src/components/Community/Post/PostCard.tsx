import React from "react";
import PostReaction from "./PostReaction";
import { Link } from "react-router-dom";

interface Props {
  title: string | undefined;
  imgLink: string | undefined;
  subtitle: string | undefined;
  postId: string | undefined;
  likes: number | undefined;
  views: number | undefined;
}

const PostCard = ({
  title,
  subtitle,
  imgLink,
  postId,
  likes,
  views,
}: Props) => {
  return (
    <div className="text-3xl">
      {" "}
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 ">
          <img src={imgLink} alt="" className="w-full object-contain " />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {subtitle}
          </p>
        </div>
        <PostReaction views={views} likes={likes} />
        <div className="p-6 pt-0">
          <Link to={`/community/${postId}`}>
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
