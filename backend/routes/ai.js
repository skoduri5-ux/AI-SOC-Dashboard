import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  const models = [
    "gemini-3.5-flash",
    "gemini-3.1-flash-lite",
    "gemini-3-flash-preview",
    "gemini-flash-latest",
    "gemini-2.0-flash",
  ];

  for (const model of models) {
    try {
      console.log(`Trying model: ${model}`);

      const response = await ai.models.generateContent({
        model,
        contents: message,
      });

      console.log(`✅ Success with ${model}`);

      return res.json({
        reply: response.text,
      });

    } catch (err) {

      console.log(`❌ ${model} failed`);
      console.log("Status:", err.status);
      console.log("Message:", err.message);

    }
  }

  res.status(503).json({
    error: "All Gemini models are currently unavailable. Please try again later.",
  });
});

export default router;
