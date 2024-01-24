const User = require("../../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("tweets");
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const createUser = async (req, res, next) => {
  try {
    if (req.file) {
      req.body = req.file.path;
    }
    const user = await Books.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, createUser };
