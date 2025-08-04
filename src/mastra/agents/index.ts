import { defineAgent } from "@mastra/core";
import { weatherTool } from "../tools";
import { openai } from "@ai-sdk/openai";

export default defineAgent({
  id: "weather-agent",
  name: "Weather Agent",
  description: "Gets the current weather.",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.
      ...
  `,
  model: openai({
    apiKey: process.env.OPENAI_API_KEY!,
    baseURL: 'https://api.aimlapi.com/v1',
    model: "openai/gpt-4.1-mini-2025-04-14",
  }),
  tools: [weatherTool],   // as an array, not object
  voice: true,
});