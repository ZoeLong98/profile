import cron from "node-cron";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

// ChatGPT 图片生成 API URL 和 API KEY
const API_URL = "https://api.openai.com/v1/images/generate";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

// 定义每天定时任务（每天中午12点执行）
cron.schedule("0 20 * * *", async () => {
  console.log("Starting the daily image generation task...");
  try {
    (async () => {
      (async () => {
        const image = await generateImage();
        saveImage(image);
      })();
    })();
  } catch (error) {
    console.error("Error generating or saving image:", error);
  }
});

// 调用 ChatGPT 的图片生成 API
export async function generateImage() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "A beautiful sunrise over a mountain",
      n: 1,
      size: "1024x1024",
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data: { data: { url: string }[] } = (await response.json()) as any;

  const imageUrl = data.data[0].url;

  // 下载图片
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    throw new Error("Failed to download image");
  }

  return imageResponse.buffer();
}

// 保存图片到本地
export function saveImage(imageBuffer: Buffer) {
  const filePath = path.join(__dirname, `generated_image_${Date.now()}.png`);
  fs.writeFileSync(filePath, imageBuffer);
  console.log("Image saved to", filePath);
}
