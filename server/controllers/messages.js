import messageModel from "../models/messages.js";

const getAllMessages = async (req, res) => {
  try {
    const messages = await messageModel.find();
    res.sendStatus(200).json({ messages: messages });
  } catch (error) {
    res.sendStatus(404).json({ error: error.message });
  }
};

const createMessage = async (req, res) => {
  const message = req.body;
  const newMessage = new messageModel(message);
  try {
    await newMessage.save();
    res.sendStatus(201).json({ message: newMessage });
  } catch (error) {
    res.sendStatus(409).json({ error: error.message });
  }
};

export { getAllMessages, createMessage };
