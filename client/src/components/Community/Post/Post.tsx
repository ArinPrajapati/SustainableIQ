import React from "react";
import { useGetPostByIdQuery } from "../../../store/api/postApi";
import Markdown from "react-markdown";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import buttonBg from "../../../assets/img/button.webp";
interface PostProps {
  id: string;
}

interface dataType {
  message: string;
  post: post;
}

interface post {
  _id: string;
  title: string;
  subtitle: string;
  imgLink?: string;
  createdAt?: string;
  updatedAt?: string;
  viewCont?: number;
  likeCont?: number;
  content?: string;
  authorId?: string;
}

const Post: React.FC<PostProps> = ({ id }) => {
  const { data, isLoading, isError } = useGetPostByIdQuery(id);
  if (isLoading && data === undefined) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="text-white bg-slate-950 w-full py-5 md:w-fit md:mx-auto h-fit ">
      <div className="flex font-sans justify-between items-center mb-4 px-2">
        <div className="text-white text-4xl flex justify-center items-center gap-4 ">
          {" "}
          <FaRegUserCircle /> user{" "}
        </div>

        <div className="relative w-fit h-fit">
          <button className="flex gap-2 justify-center items-center text-3xl bg-[#f0f0f02d] p-2 m-2 mr-0 rounded-md rounded-r-none  active:scale-95 transition-transform z-[35] ">
            <AiOutlineLike /> {data?.post.likeCont}
          </button>

          <button className="flex gap-2 justify-center items-center text-3xl bg-[#f0f0f02d] p-2 m-2 ml-0 rounded-lg rounded-l-none">
            <GrView /> {data?.post.viewCont}
          </button>
        </div>
      </div>
      <img className="h-auto max-w-full mb-4" src={data?.post.imgLink} alt="" />

      <div className="flex flex-col px-4">
        <p className="text-4xl my-4 sm:text-[4rem] font-bold capitalize sm:leading-[3.5rem]">
          {data?.post.title}
        </p>
        <p className="text-2xl my-4 sm:text-[3rem] font-bold capitalize sm:leading-[3.5rem]">
          {data?.post.subtitle}
        </p>
        <p className="text-2xl my-4 sm:text-[3rem] font-bold capitalize sm:leading-[3.5rem]">
          <Markdown className="h-full markdown-container w-full">
            {data?.post.content}
          </Markdown>
        </p>
      </div>
    </div>
  );
};

export default Post;
