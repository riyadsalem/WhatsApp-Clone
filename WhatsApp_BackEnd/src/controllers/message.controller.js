export const sendMessage = async (req, res, next) => {
  try {
    res.send(req.body);
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
