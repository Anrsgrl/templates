import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col gap-1 py-6 border-b border-zinc-300/25 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
          <div className="h-6 w-40 bg-zinc-700 rounded-md"></div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
            <div className="h-4 w-12 bg-zinc-700 rounded-md"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="py-2 px-4 bg-zinc-800 border border-zinc-700 rounded-md flex items-center gap-1 w-32 h-8"></div>
          <div className="py-2 px-4 bg-zinc-800 border border-zinc-700 rounded-md flex items-center gap-1 w-16 h-8"></div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="p-1 bg-zinc-700 border border-zinc-700 rounded-md flex items-center gap-1 w-7 h-7"></div>
        <div className="p-1 bg-zinc-700 border border-zinc-700 rounded-md flex items-center gap-1 w-7 h-7"></div>
      </div>
      <div className="h-4 w-3/4 bg-zinc-700 rounded-md mt-2"></div>
    </div>
  );
};

export default SkeletonLoading;
