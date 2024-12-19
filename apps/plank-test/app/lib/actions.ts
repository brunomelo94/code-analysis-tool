"use server";

import { codeAnalysisSchema } from "./schema";
import OpenAI from "openai";

export async function analyzeCodeAction(formData: FormData) {
  try {
    const rawCode = formData.get("code");
    const rawLanguage = formData.get("language") ?? "javascript";

    const parsed = codeAnalysisSchema.parse({
      code: rawCode,
      language: rawLanguage,
    });

    return await requestCodeAnalysisOpenAI(parsed.code, parsed.language);
  } catch (error: any) {
    // If it's a Zod error, you can extract the message and return it.
    if (error.errors) {
      // Zod provides errors array with messages
      const message = error.errors.map((err: any) => err.message).join(", ");
      return `Error: ${message}`;
    }
    return "An unexpected error occurred.";
  }
}


export async function requestCodeAnalysisOpenAI(
  userCode: string,
  language: string
): Promise<string> {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const isSafe = true; //await checkModeration(userCode, openai);
    if (!isSafe) {
      return "⚠️ The provided code contains potentially harmful content.";
    }

    const prompt = `
    You are an expert AI coding assistant with deep knowledge of software development. Given a user's code snippet, produce the following outputs:
    
    1. **Natural Language Explanation**: A concise, clear explanation of what the code does.
    2. **Refactored Code**: A cleaner, more maintainable version of the code. Add comments where improvements have been made.
    3. **Step-by-Step Reasoning**: Detail the reasoning process used to derive the explanation and refactoring.
    
    **Format your response using markdown and follow the exact structure below:**
    ---
    ### 📝 Explanation:
    
    <Your Explanation Here>
    ---
    ### 💻 Refactored Code:
    
    \`\`\`${language}
    <Your Refactored Code Here>
    \`\`\`
    ---
    ### 🔍 Step-by-Step Reasoning:
    
    1. **Step 1**: ...
    2. **Step 2**: ...
    3. **Step 3**: ...
    ---
    **Original Code Snippet:**
    
    \`\`\`${language}
    ${userCode}
    \`\`\`
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      max_completion_tokens: 10000,
    });

    const response = completion?.choices?.[0]?.message?.content?.trim();
    return response || "No valid response received.";
  } catch (error: any) {
    console.error("Error during OpenAI request:", error.message);
    return "Failed to get a response from OpenAI. Please try again later.";
  }
}

async function checkModeration(userCode: string, openai: OpenAI): Promise<boolean> {
  try {
    const moderationResponse = await openai.moderations.create({ input: userCode });
    const flagged = moderationResponse.results[0].flagged;
    if (flagged) {
      console.warn("⚠️ The code snippet is potentially harmful.");
      return false;
    }
    return true;
  } catch (error: any) {
    console.error("Error checking moderation:", error.message);
    return false;
  }
}