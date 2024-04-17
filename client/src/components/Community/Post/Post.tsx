import React, { useEffect } from "react";
import { useGetPostByIdQuery } from "@/store/api/postApi";
import Markdown from "react-markdown";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import buttonBg from "../../../assets/img/button.webp";
import { useAddLikeMutation, useAddViewMutation } from "@/store/api/postApi";
import CommentModel from "@/components/modals/CommentModel";
import { Button } from "@/components/ui/button";
import Comments from "./Comments";
import { toast } from "react-toastify";
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
  const [addLike] = useAddLikeMutation();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, isError } = useGetPostByIdQuery(id);
  if (isLoading && data === undefined) {
    return <div className="text-white">Loading...</div>;
  }

  const addLikeHandler = async (id: string) => {
    // Retrieve liked post IDs from local storage
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");

    // Check if the current post ID is already in the array
    if (!likedPosts.includes(id)) {
      // Add the post ID to the array
      likedPosts.push(id);

      // Update local storage with the updated array
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

      // Perform the like operation (assuming addLike(id) is a function that adds a like)
      await addLike(id);
      toast.success("Post liked successfully!");
    } else {
      // Post is already liked, you might want to handle this case accordingly
      console.log("Post is already liked.");
      toast.error("Post is already liked");
    }
  };

  return (
    <div className="text-white bg-slate-950 w-full py-5 md:w-fit md:mx-auto h-fit md:min-w-[600px]">
      <div className="flex font-sans justify-between items-center mb-4 px-2">
        <div className="text-white text-2xl md:text-3xl flex justify-center items-center gap-4 ">
          {" "}
          <FaRegUserCircle /> {data?.post.authorName || "Anonymous"}
        </div>

        <div className="relative w-fit h-fit flex">
          <button
            className="flex gap-2 justify-center items-center text-3xl bg-[#f0f0f02d] p-2 m-2 mr-0 rounded-md rounded-r-none  active:scale-95 transition-transform "
            onClick={() => addLikeHandler(data?.post._id)}
          >
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

      <hr />
      <Button
        onClick={() => setOpen(true)}
        className="my-4 bg-blue-50 hover:bg-slate-300 text-black"
      >
        Add Comment
      </Button>

      <Comments postId={data?.post._id} />

      {open && <CommentModel setopen={setOpen} postid={data?.post._id} />}
    </div>
  );
};

export default Post;
