  import React, { useState, useEffect } from "react";
  import { socket } from "../socket";
  import Button from "../utils/Button";
  import Markdown from "react-markdown";
  import remarkGfm from "remark-gfm";
  import PostMaker from "../components/Community/PostMaker";
  import PostCard from "../components/Community/Post/PostCard";
  import PostHolder from "../components/Community/PostHolder";

  const Community = () => {
    const [openPostMaker, setOpenPostMaker] = useState(false);

    useEffect(() => {
      socket.connect();
      socket.on("connect", () => {
        console.log(socket.id);
      });

      socket.on("message", (data) => {
        console.log(data);
      });

      return () => {
        socket.disconnect(); // Cleanup on component unmount
      };
    }, []);

    const sendMessage = () => {
      socket.emit("message", {
        message: "hello",
        userID: "234215",
        ifIncognito: "false",
        imgLink:
          "https://i.pinimg.com/564x/77/9f/8f/779f8fe29be499ac7e1cf41016513028.jpg",
        date: Date.now(),
        userName: "User",
      });
    };

    return (
      <div className="w-full">
        <div className="text-3xl text-white w-full text-center my-4">
          Community
        </div>
        <Button
          onClick={() => setOpenPostMaker(!openPostMaker)}
          text="Open Post Maker"
          color="#DB2F45"
          extraClasses="text-[1rem] mt-3 active:scale-90"
        />
        {openPostMaker && <PostMaker />}
        <div>
          <PostHolder />
        </div>
      </div>
    );
  };

  export default Community;
