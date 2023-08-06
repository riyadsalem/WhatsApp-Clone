export const register = async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    res.send("LOGIN");
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.send("LOGOUT");
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    res.send("REFRESHTOKEN");
  } catch (error) {
    next(error);
  }
};
