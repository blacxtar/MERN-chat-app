import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand-store/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  const isSelected = selectedConversation ? true : false;
  return (
    <div
      className="flex flex-col sm:flex-row h-[90vh] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
  backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <div className={`w-full ${isSelected ? "hidden sm:block" : "block"}`}>
        <Sidebar />
      </div>
      <div
        className={`w-full ${isSelected ? "block h-full" : "hidden sm:block"}`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
