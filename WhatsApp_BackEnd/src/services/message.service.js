import createHttpError from "http-errors";
import { MessageModel } from "../models/index.js";

export const createMessage = async (data) => {
  let newMessage = await MessageModel.create(data);

  if (!newMessage)
    throw createHttpError.BadRequest("Oops...Something went wrong !");

  return newMessage;
};
