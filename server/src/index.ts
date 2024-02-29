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
import UserRouter from "./routes/UserRoutes";
const app = express();
const port = process.env.PORT || 3004;

connectDB();

const server = http.createServer(app);
app.use(cors()); // Invoking the cors middleware
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", routes);
app.use("/api/image", imgLink);
app.use("/api/forumPost", ForumRouter);
app.use("/api/forumComment", ForumCommnetRouter);
app.use("/api/user", UserRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

setupSockets(server);
