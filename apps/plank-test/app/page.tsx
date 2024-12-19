"use client";

import { useTransition, useState } from "react";
import AppTitle from "@/app/ui/app-title";
import { Button } from "@/app/ui/button";
import { analyzeCodeAction } from "@/app/lib/actions"; // server action
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import "highlight.js/styles/github-dark.css";
import { OpenAIResponseSkeleton } from "@/app/ui/skeletons";
import { SUPPORTED_LANGUAGES } from "@/app/lib/schema";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string>("");
  const [codeInput, setCodeInput] = useState<string>(""); // State for code input

  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-8">
      <AppTitle title="Code Analysis Tool" />

      <form
        action={async (formData) => {
          startTransition(async () => {
            const res = await analyzeCodeAction(formData);
            setResponse(res);
          });
        }}
        className="my-responsive-card flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-white"
          >
            Select Language
          </label>
          <select
            id="language"
            name="language"
            className="w-full bg-black text-white border border-white rounded-md p-2"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="code"
            className="block mb-2 text-sm font-medium text-white"
          >
            Enter Code
          </label>
          <textarea
            id="code"
            name="code"
            placeholder="Paste your code snippet here..."
            rows={8}
            value={codeInput} // Controlled input
            onChange={(e) => setCodeInput(e.target.value)}
            className="w-full bg-black text-white border border-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>{" "}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 border border-white rounded-md shadow-md transition duration-300"
          >
            Analyze Code!
          </Button>
        </div>
      </form>

      <div className="mt-8 w-full flex justify-center">
        {isPending ? (
          <OpenAIResponseSkeleton />
        ) : (
          response && (
            <div className="my-responsive-card flex flex-col gap-4">
              <h2 className="text-lg font-semibold mb-4">OpenAI Response:</h2>
              <div className="markdown-output prose prose-invert max-w-none">
                <ReactMarkdown
                  rehypePlugins={[rehypeHighlight]}
                  remarkPlugins={[remarkBreaks]}
                >
                  {response || "Awaiting response..."}
                </ReactMarkdown>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
