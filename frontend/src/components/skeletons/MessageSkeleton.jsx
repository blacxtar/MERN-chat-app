import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex items-center space-x-4 p-4 animate-pulse">
        <div className="rounded-full bg-gray-400 h-10 w-10"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 bg-gray-400 rounded w-3/4"></div>
          <div className=" h-2 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4 animate-pulse">
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 bg-gray-400 rounded w-3/4"></div>
          <div className=" h-2 bg-gray-400 rounded w-1/2"></div>
        </div>
        <div className="rounded-full bg-gray-400 h-10 w-10"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
