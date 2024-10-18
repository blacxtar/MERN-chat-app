import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className=" relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
