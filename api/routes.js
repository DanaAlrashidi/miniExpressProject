const express = require("express");

const Books = require("../models/Books");
const router = express.Router();

const {
  getAllBooks,
  getBookbyID,
  createBook,
  UpdateBook,
  deleteBook,
} = require("./controllers");
const upload = require("../middlewares/multers");

router.param("_id", async (req, res, next, _id) => {
  const book = await Books.findById(_id);
  if (!book)
    return res.status(404).json({ message: "book with this id not found!" });

  req.book = book;
  next();
});

router.get("/", getAllBooks);
router.get("/:_id", getBookbyID);
router.put("/:_id", UpdateBook);
router.delete("/:_id", deleteBook);
router.post("/", upload.single("bookImage"), createBook);
module.exports = router;
