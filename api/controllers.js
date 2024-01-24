const Books = require("../models/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Books.find();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBookbyID = async (req, res, next) => {
  try {
    const book = await req.book;
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.bookImage = req.file.path;
    }
    const book = await Books.create(req.body);
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const UpdateBook = async (req, res, next) => {
  try {
    await req.book.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
const deleteBook = async (req, res, next) => {
  try {
    await req.book.deleteOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next();
  }
};

module.exports = {
  getAllBooks,
  getBookbyID,
  createBook,
  UpdateBook,
  deleteBook,
};
