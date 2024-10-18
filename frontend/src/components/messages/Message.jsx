import React from "react";

const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="./favicon.webp" />
        </div>
      </div>
      <div className="chat-header">
        Ahmad
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        How are you today?
      </div>
    </div>
  );
};

export default Message;
