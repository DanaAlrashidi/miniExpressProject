const { Schema, model } = require("mongoose");

const TweetSchema = new Schema({
  usetextrname: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = model("Tweet", TweetSchema);
