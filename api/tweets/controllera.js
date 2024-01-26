const Tweet = require("../../models/Tweet");
const User = require("../../models/User");

const getAllTweets = async (req, res, next) => {
  try {
    const tweets = await Tweet.find();

    return res.status(201).json(tweets);
  } catch (error) {
    next(error);
  }
};

const createTweets = async (req, res, next) => {
  try {
    const { userId } = req.params; //there is new tweet updated in your acc

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found:!" });
    }
    req.body.user = userId;
    const tweet = await Tweet.create(req.body);
    await user.updateOne({ $push: { tweets: tweet.id } }); //add new tweet in my aray
    return res.status(201).json(tweet);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTweets, createTweets };
