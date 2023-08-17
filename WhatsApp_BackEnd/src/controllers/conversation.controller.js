import createHttpError from "http-errors";
import logger from "../configs/logger.config.js";
import {
  doesConversationExist,
  createConversation,
  populateConversation,
  getUserConversations,
} from "../services/conversation.service.js";
import UserModel from "../models/userModel.js";

export const create_open_conversation = async (req, res, next) => {
  try {
    const sender_id = req.user.userId;
    const { receiver_id, isGroup } = req.body;

    if (isGroup == false) {
      //check if receiver_id is provided
      if (!receiver_id) {
        logger.error(
          "please provide the user id you wanna start a conversation with !"
        );
        throw createHttpError.BadGateway("Oops...Something went wrong !");
      }

      //check if chat exists
      const existed_conversation = await doesConversationExist(
        sender_id,
        receiver_id,
        false
      );

      if (existed_conversation) {
        res.json(existed_conversation);
      } else {
        let receiver_user = await UserModel.findById(receiver_id);
        let convoData = {
          name: receiver_user.name,
          picture: receiver_user.picture,
          isGroup: false,
          users: [sender_id, receiver_id],
        };

        const newConvo = await createConversation(convoData);

        const populatedConvo = await populateConversation(
          newConvo._id,
          "users",
          "-password"
        );

        res.status(200).json(populatedConvo);
      }
    } else {
    }
  } catch (error) {
    next(error);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const user_id = req.user.userId;
    const conversations = await getUserConversations(user_id);
    res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
};
