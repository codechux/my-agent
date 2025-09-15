import { generateText } from "ai";
import { google } from "@ai-sdk/google";

const { text } = await generateText({
  model: google("models/gemini-2.5-flash"), // or "models/gemini-1.5-flash"
  prompt: "Write a poem about the sea",
});

console.log(text);
