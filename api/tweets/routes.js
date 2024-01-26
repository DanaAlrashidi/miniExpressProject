const express = require("express");
const { getAllTweets, createTweets } = require("./controllera");
const router = express.Router();
router.get("/tweets", getAllTweets);
router.post("/tweets/:userId", createTweets);

module.exports = router;
