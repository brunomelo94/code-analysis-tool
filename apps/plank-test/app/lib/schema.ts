import { z } from "zod";

export const SUPPORTED_LANGUAGES = [
  "javascript",
  "python",
  "typescript",
  "java",
  "cpp",
  "csharp",
  "ruby",
  "php",
  "swift",
  "go",
  "unknown"
] as const;

export const codeAnalysisSchema = z.object({
  code: z.string().nonempty("Code snippet is required."),
  language: z.enum(SUPPORTED_LANGUAGES)
});
