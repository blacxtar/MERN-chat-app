import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessages = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //SOCKET IO functionality will go here

    //  this two will run one by one , so we can user Promise.all to execute akl in parallel
    // await conversation.save();
    // await newMessage.save();

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in send message", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);
    // console.log(conversation.messages);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in get message", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
