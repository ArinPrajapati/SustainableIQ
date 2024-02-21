import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
import http from "http";
import imgLink from "./routes/imageLinker";
import { setupSockets } from "./socket";
import connectDB from "./config/connectDB";
import ForumRouter from "./routes/ForumRouter";
import ForumCommnetRouter from "./routes/ForumPostCommentRouter";
const app = express();
const port = process.env.PORT || 3000;

connectDB();

const server = http.createServer(app);
app.use(cors()); // Invoking the cors middleware
app.use(bodyParser.json());

app.use("/api", routes);
app.use("/api/image", imgLink);
app.use("/api/forumPost", ForumRouter);
app.use("/api/forumComment" , ForumCommnetRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

setupSockets(server);
