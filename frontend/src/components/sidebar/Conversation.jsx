import React, { useEffect, useState } from "react";
import useConversation from "../../zustand-store/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import TypingIndicator from "../messages/TypingIndicator";

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!socket) return;

    socket.on("typing", (data) => {
      const { typing, sender } = data;
      if (conversation._id === sender) {
        setIsTyping(typing);
      }
    });
    socket.on("stopTyping", (data) => {
      const { typing, sender } = data;
      if (conversation._id === sender) {
        setIsTyping(typing);
      }
    });
  }, [socket, conversation._id]);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div className="flex flex-col -mt-1">
              <p className="font-bold text-gray-200">{conversation.fullName}</p>
              {isTyping && <TypingIndicator />}
            </div>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
