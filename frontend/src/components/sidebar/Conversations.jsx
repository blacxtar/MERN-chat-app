import React from "react";
import Conversation from "./Conversation";
import useGetConvo from "../../hooks/useGetConvo.js";
import { generateRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConvo();
  console.log("CONVERSATION", conversations);
  return (
    <div className="py-2 flex flex-col  overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={generateRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
