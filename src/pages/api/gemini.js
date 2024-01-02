import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

export default async function handler(req, res) {
  const query = req.query.query;
  const imageUrl = req.query.img;
  const API_KEY = 'AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM';

  // Converts file information (local path or URL) to a GoogleGenerativeAI.Part object.
  async function fileToGenerativePart(fileInfo) {
    try {
      const response = await axios.get(fileInfo.url, { responseType: "arraybuffer" });
      const data = Buffer.from(response.data, "binary").toString("base64");

      return {
        inlineData: {
          data,
          mimeType: fileInfo.mimeType,
        },
      };
    } catch (error) {
      console.error(`Error in fileToGenerativePart: ${error.message}`);
      throw new Error("Error converting file to GenerativeAI Part");
    }
  }

  try {
    if (imageUrl) {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const prompt = query;

      const imageFiles = [
        { type: "url", url: imageUrl, mimeType: "image/png" },
      ];

      const imageParts = await Promise.all(imageFiles.map(fileToGenerativePart));

      const result = await model.generateContent([prompt, ...imageParts]);
      const resp = await result.response;
      const response = resp.text();
      res.status(200).json({ response: response });
    } else {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = query;

      const result = await model.generateContent(prompt);
      const resp = await result.response;
      const response = resp.text();

      res.status(200).json({ response: response });
    }
  } catch (error) {
    console.error(`Error in GET handler: ${error.message}`);
    res.status(405).end();
  }
}
