import React from "react";

// Reusable Shimmer Effect
const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

// App Title Skeleton
export function AppTitleSkeleton() {
  return (
    <div
      className={`my-responsive-card ${shimmer} flex flex-col gap-4`}
    ></div>
  );
}

// Code Form Skeleton
export function CodeFormSkeleton() {
  return (
    <div
      className={`my-responsive-card ${shimmer} flex flex-col gap-4`}
    >
      {/* Language Selector */}
      <div className="h-8 w-1/3 bg-gray-700 rounded-md"></div>

      {/* Code Input */}
      <div className="h-48 w-full bg-gray-700 rounded-md"></div>

      {/* Submit Button */}
      <div className="h-10 w-32 bg-gray-700 rounded-md ml-auto"></div>
    </div>
  );
}

// OpenAI Response Skeleton
export function OpenAIResponseSkeleton() {
  return (
    <div
      className={`my-responsive-card ${shimmer} flex flex-col gap-4`}
    >
      {/* Header */}
      <div className="h-6 w-1/3 bg-gray-700 rounded-md"></div>

      {/* Response Content */}
      <div className="h-48 w-full bg-gray-700 rounded-md"></div>
    </div>
  );
}

// Combined Loader Skeleton (Optional for Overall Loading)
export default function CombinedSkeletonLoader() {
  return (
    <div className={`my-responsive-card flex flex-col gap-4`}>
      {/* App Title Skeleton */}
      <AppTitleSkeleton />

      {/* Code Form Skeleton */}
      <CodeFormSkeleton />

      {/* OpenAI Response Skeleton */}
      <OpenAIResponseSkeleton />
    </div>
  );
}
