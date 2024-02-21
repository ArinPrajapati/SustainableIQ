import React, { useState } from "react";

import Markdown from "react-markdown";
import { useCreatePostMutation } from "../../store/api/postApi";

import "./PostMaker.css";
import ImageUpload from "../ImageUpload";
const PostMaker = () => {
  const [markdown, setMarkdown] = useState("");
  const [imageLink, setImageLink] = useState<string | undefined>("");
  const {createApi } = useCreatePostMutation()

  const createPost = (e) => {
    
  };

  return (
    <div className="w-1/2 absolute z-20 shadow-md rounded-[10px] left-[35rem]  bg-white">
      <h1 className="text-3xl font-IBMPlexMono w-full text-center text-white  rounded-t-[10px] mb-4 p-2 bg-slate-500">
        Post Maker
      </h1>
      <div className=" p-4 font-IBMPlexMono shadow-md">
        <div className="text-3xl ">Title</div>
        <input
          type="text"
          placeholder="Title"
          className="w-full outline-none p-4 text-3xl  "
          name="title"
        />
        <div className="text-2xl">Subtitle</div>
        <input
          type="text"
          placeholder="Subtitle"
          className="w-full outline-none p-4 text-2xl  "
          name="title"
        />

        <div className="text-2xl">Content </div>
        <div className="container flex">
          <Markdown className="w-1/2 p-5 h-full markdown-container">
            {markdown}
          </Markdown>
          <textarea
            className="w-1/2 bg-red-50 outline-none p-4"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            name="word"
            id=""
            cols={10}
            rows={10}
            placeholder="Content in Markdown format"
          >
            {" "}
          </textarea>
        </div>
        <ImageUpload setImageLink={setImageLink} />
      </div>
    </div>
  );
};

export default PostMaker;
