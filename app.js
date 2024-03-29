const PORT = 8000;
const express = require("express");
const booksRouter = require("./api/routes");
const tweetRouter = require("./api/tweets/routes");

const userRouter = require("./api/users/routes");
// require('dotenv').config();
const connectDB = require("./database");

const app = express(); //my backend
const morgan = require("morgan");

const path = require("path");

//middleware
app.use(express.json());
app.use(morgan("dev"));

//my routes
app.use("/media", express.static(path.join(__dirname, "public")));
app.use("/api/books", booksRouter);
app.use("api", tweetRouter);
app.use("api", userRouter);
//not found handler
app.use((req, res, next) => {
  return res.status(404).json({ message: "Path not found!" });
});

//not found handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Path not found!");
});

connectDB();
app.listen(PORT, () => {
  console.log(`I'm running this server ${PORT}`);
});
