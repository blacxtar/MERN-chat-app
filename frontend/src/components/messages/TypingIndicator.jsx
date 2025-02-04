import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-[5px] text-sm text-green-500">
      <span>typing</span>
      <span className="flex gap-1 mt-2">
        <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></span>
        <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-200"></span>
        <span className="w-1 h-1 bg-green-500 rounded-full animate-bounce "></span>
      </span>
    </div>
  );
};

export default TypingIndicator;
