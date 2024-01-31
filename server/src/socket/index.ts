import { Server, Socket } from "socket.io";
import http from "http";

interface messageData {
  message: string;
  userID?: string;
  ifIncognito?: string;
  imgLink?: string;
  date: string;
  userName: string;
}

export const setupSockets = (
  server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log("a user connected");

    // Event listener for the "message" event on an individual socket
    socket.on("message", (data: messageData) => {
      console.log("something is happening");
      console.log(data);
      socket.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
