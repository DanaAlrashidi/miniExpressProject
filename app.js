const PORT = 8000;
const express = require("express");
const booksRouter = require("./api/routes");

// require('dotenv').config();
const connectDB = require("./database");
const app = express(); //my backend
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/books", booksRouter);

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
