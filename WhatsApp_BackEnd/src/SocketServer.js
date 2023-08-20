import logger from "./configs/logger.config.js";
//   logger.info("socket io connected successfully.");

export default function (socket, io) {
  //user joins or opens the application
  socket.on("join", (user) => {
    socket.join(user);
    logger.info("user do join");
  });

  //join a conversation room
  socket.on("join conversation", (conversation) => {
    socket.join(conversation);
    logger.info("conversation do join");
  });

  //send and receive message
  socket.on("send message", (message) => {
    let conversation = message.conversation;
    if (!conversation.users) return;
    conversation.users.forEach((user) => {
      if (user._id === message.sender._id) return;
      socket.in(user._id).emit("receive message", message);
      logger.info("message do send");
    });
  });
}
