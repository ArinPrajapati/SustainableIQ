import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Community/Post/Post";
const PostPage = () => {
  const { id } = useParams();
  const postId = id || "";
  return (
    <div>
      <Post id={postId} />
    </div>
  );
};

export default PostPage;
