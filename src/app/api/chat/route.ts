import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    console.log("API Key Check:", process.env.GEMINI_API_KEY ? "Present" : "Missing");
  try {
    const body = await req.json();
    const { message } = body;

    // The "System Prompt" - Defining Roxy's Personality
    // This is where you "fine-tune" the bot without training a model.
    const systemPrompt = `
      You are Roxy, the AI Assistant for Roxane Laboratories Pvt Ltd.
      
      YOUR KNOWLEDGE BASE:
      - We manufacture Tablets, Capsules, Syrups, and Injectables.
      - We are WHO-GMP and ISO 9001:2015 certified.
      - Located in Baddi, Himachal Pradesh (Pharma Hub).
      - We offer Third-Party Manufacturing (Contract Manufacturing).
      
      YOUR BEHAVIOR:
      - Be professional, scientific, yet polite.
      - If asked about medical advice (doses, side effects), say: "As a pharmaceutical manufacturer, we cannot provide medical advice to patients. Please consult a registered medical practitioner."
      - If asked about bulk orders, ask them to email "sales@roxane.com".
      - Keep answers concise (under 50 words if possible).
    `;

    // Select the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Combine system prompt with user message
    const prompt = `${systemPrompt}\n\nUser Query: ${message}\nRoxy's Answer:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ reply: "I am currently experiencing high traffic. Please contact support manually." }, { status: 500 });
  }
}