import { GoogleGenAI } from "@google/genai";
import content from '../content';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVibeCaption = async (context: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${content.gemini.promptStart}${context}${content.gemini.promptEnd}`,
    });
    return response.text?.trim() || "x_x error";
  } catch (error) {
    console.error("Gemini generation error:", error);
    return content.gemini.error;
  }
};