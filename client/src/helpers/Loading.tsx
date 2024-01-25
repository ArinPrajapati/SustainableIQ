import React from "react";
import loaidng from "../assets/img/image_processing20201006-10448-1njvb8g.gif";
const Loading = () => {
  const laodingBackgroundColor = "bg-[#c9bfb5]";
  return (
    <div
      className={`w-screen h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col ${laodingBackgroundColor} z-50 `}
    >
      <img src={loaidng} alt="loading" />
      loading...
    </div>
  );
};

export default Loading;
