import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand-store/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { MdArrowBack } from "react-icons/md";
import { useSocketContext } from "../../context/SocketContext";
import TypingIndicator from "./TypingIndicator";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  const [isTyping, setIsTyping] = useState(false);
  const { authUser } = useAuthContext();
  // console.log(socket);

  useEffect(() => {
    if (!socket || !selectedConversation) return; // ✅ Check if socket exists

    const handleTyping = (data) => {
      const { typing, sender } = data;

      if (selectedConversation?._id === sender) setIsTyping(typing);
    };

    socket.on("typing", handleTyping);
    socket.on("stopTyping", handleTyping);

    // reset selectedConversation when we logOut that is when this component unMounts(no longer in the view of browser)
    return () => {
      socket?.off("typing", handleTyping);
      socket?.off("stopTyping", handleTyping);
    };
  }, [socket, selectedConversation, authUser]);

  return (
    <div className=" w-[95vw] md:w-[450px] flex flex-col h-full ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* HEADER */}
          <div className="bg-slate-500 flex items-center gap-2 px-4 py-2 mb-2">
            <button onClick={() => setSelectedConversation(null)}>
              <MdArrowBack />
            </button>
            <div className={`chat-image avatar ${isOnline ? "online" : ""}`}>
              <div className="w-10 rounded-full">
                <img src={selectedConversation.profilePic} />
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-bold  text-gray-900 -mb-1">
                {selectedConversation.fullName}
              </span>

              {isTyping && <TypingIndicator />}
            </div>
            <div />
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold">
        <p>Welcome 👋 {authUser.fullName} 🌠</p>
        <p>Select a chat to start messaging </p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
