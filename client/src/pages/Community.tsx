import React from "react";
import { socket } from "../socket";
import Button from "../utils/Button";

const Community = () => {
  socket.connect();
  socket.on("connect", () => {
    console.log(socket.id);
  });

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

  socket.on("message", (data) => {
    console.log(data);
  });
  return (
    <div className="text-3xl text-white">
      Community
      <Button
        onClick={sendMessage}
        text={"Send"}
        color={"#999999"}
        extraClasses={"mt-3 active:scale-95"}
      />
    </div>
  );
};

export default Community;
