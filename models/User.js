const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet", required: true }],
});

module.exports = model("User", UserSchema);
