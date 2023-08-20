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
}
