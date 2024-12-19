"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-white">
      <div className="my-responsive-card flex flex-col gap-4 items-center text-center">
        <h1 className="text-2xl font-bold">Oops! Something went wrong 😢</h1>
        <p className="text-sm text-gray-300">
          We encountered an unexpected error. Please try again, or return to the homepage.
        </p>

        <div className="flex gap-4">
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            onClick={() => reset()}
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Go Home
          </Link>
        </div>

        {/* If you want to show some debugging info during development */}
        {process.env.NODE_ENV === "development" && (
          <pre className="text-left text-sm bg-gray-800 p-4 rounded-md overflow-auto max-w-lg">
            {error.toString()}
          </pre>
        )}
      </div>
    </main>
  );
}
