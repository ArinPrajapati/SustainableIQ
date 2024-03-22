import { useState } from "react";

import Markdown from "react-markdown";
import { useCreatePostMutation } from "../../store/api/postApi";

import "./PostMaker.css";
import ImageUpload from "../ImageUpload";
const PostMaker = () => {
  const [markdown, setMarkdown] = useState("");
  const [imageLink, setImageLink] = useState<string | undefined>("");
  const [createPostApi, { isLoading, isError }] = useCreatePostMutation();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const createPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!markdown) return;
    if (imageLink) {
      try {
        createPostApi({
          title: title,
          subtitle: subtitle,
          content: markdown,
          imgLink: imageLink,
          authorName: name,
        }).then(() => {
          setMarkdown("");
          setImageLink("");
          setTitle("");
          setSubtitle("");
          alert("Post created successfully");
        });
      } catch (error) {
        console.log(error);
        alert("Post creation failed");
      }
    } else {
      createPostApi({
        title: title,
        subtitle: subtitle,
        content: markdown,
        authorName: name,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-1/2 absolute z-20 shadow-md rounded-[10px] left-[35rem]  bg-white">
          <h1 className="text-3xl font-IBMPlexMono w-full text-center text-white  rounded-t-[10px] mb-4 p-2 bg-slate-500">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="w-1/2 absolute z-20 shadow-md rounded-[10px] left-[35rem]  bg-white">
          <h1 className="text-3xl font-IBMPlexMono w-full text-center text-white  rounded-t-[10px] mb-4 p-2 bg-slate-500">
            Post Maker
          </h1>
          <div className=" p-4 font-IBMPlexMono shadow-md">
            <div className="text-2xl ">Name</div>
            <input
              type="text"
              placeholder="Your Name or any name you want"
              className="w-full outline-none p-4 text-2xl  "
              name="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="text-3xl ">Title</div>
            <input
              type="text"
              placeholder="Title"
              className="w-full outline-none p-4 text-3xl  "
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text-2xl">Subtitle</div>
            <input
              type="text"
              placeholder="Subtitle"
              className="w-full outline-none p-4 text-2xl  "
              name="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <div className="text-2xl">Content </div>
            <div className="container flex">
              <Markdown className="w-1/2 p-5 h-full markdown-container bg-white min-h-[300px] max-h-[300px] overflow-y-scroll">
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
            <div className="flex justify-end ">
              <button
                className="px-8 py-3 font-semibold rounded m-4 bg-gray-400 text-gray-800 disabled:cursor-not-allowed disabled:bg-red-400"
                onClick={createPost}
                disabled={!imageLink}
                type="submit"
              >
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostMaker;
