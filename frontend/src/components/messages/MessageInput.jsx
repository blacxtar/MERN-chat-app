import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand-store/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessages();
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className=" relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={() => {
            socket.emit("typing", {
              typing: true,
              receiver: selectedConversation._id,
              sender: authUser._id,
            });
          }}
          onBlur={() => {
            socket.emit("stopTyping", {
              typing: false,
              receiver: selectedConversation._id,
              sender: authUser._id,
            });
          }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner mx-auto"></span>
          ) : (
            <BsSend className="text-[#81C784]" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
