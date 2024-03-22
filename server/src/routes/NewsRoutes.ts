import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    console.log(process.env.NEWS_API_KEY);
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=environment&apiKey=" +
        process.env.NEWS_API_KEY
    );

    // Extracting only necessary data from the response
    const { data } = response;

    res.status(200).json({ news: data }); // Sending only 'data' to avoid circular reference
  } catch (error) {
    res.status(500).json({ message: "Error fetching news" });
    console.error(error);
  }
});

export default router;

