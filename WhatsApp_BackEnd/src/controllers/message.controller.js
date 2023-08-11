import logger from "../configs/logger.config.js";
import { createMessage } from "../services/message.service.js";

export const sendMessage = async (req, res, next) => {
  try {
    const user_id = req.user.userId;
    const { message, convo_id, files } = req.body;

    if (!convo_id || (!message && !files)) {
      logger.error("Please provider a conversation id and a message body");
      return res.sendStatus(400);
    }

    const msgData = {
      sender: user_id,
      message,
      conversation: convo_id,
      files: files || [],
    };

    let newMessage = await createMessage(msgData);

    res.send(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    res.send("getMessages");
  } catch (error) {
    next(error);
  }
};
