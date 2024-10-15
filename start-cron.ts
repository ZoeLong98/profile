import { generateImage, saveImage } from "./src/api/generate-image";
console.log("Cron job started");
import fs from "fs";
import OpenAI from "openai";
(async () => {
  try {
    const openai = new OpenAI({
      apiKey:
        "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",
    });
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt:
        "An abstract background with vibrant brushstrokes in shades of orange, yellow, and teal. The colors blend smoothly with large sweeping motions, creating a dynamic yet soft, flowing texture. The strokes should overlap, forming an energetic and artistic pattern that feels light and airy.",
      n: 1,
      size: "1024x1024",
    });

    console.log(response.data[0].url);
  } catch (error) {
    console.error("Error generating or saving image:", error);
  }
})();
