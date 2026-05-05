import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col h-full bg-white/5 border border-white/5 rounded-[2.5rem] p-8 animate-pulse shadow-2xl">
      {/* Image Placeholder */}
      <div className="h-52 bg-white/10 rounded-3xl mb-6 w-full shadow-inner" />

      {/* Content Placeholder */}
      <div className="flex flex-col flex-grow">
        {/* Title Placeholder */}
        <div className="h-7 bg-white/10 rounded-lg w-3/4 mb-4" />
        
        {/* Company Name Placeholder */}
        <div className="h-3 bg-white/10 rounded-lg w-1/3 mb-6" />

        {/* Description Lines Placeholder */}
        <div className="space-y-3 mb-8">
          <div className="h-3 bg-white/5 rounded-md w-full" />
          <div className="h-3 bg-white/5 rounded-md w-5/6" />
        </div>

        {/* Footer Meta Placeholder */}
        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center mb-6">
          <div className="h-4 bg-white/10 rounded-md w-1/4" />
          <div className="h-4 bg-white/10 rounded-md w-1/4" />
        </div>

        {/* Button Placeholder */}
        <div className="h-14 bg-white/10 rounded-2xl w-full shadow-md" />
      </div>
    </div>
  );
};

export default SkeletonCard;