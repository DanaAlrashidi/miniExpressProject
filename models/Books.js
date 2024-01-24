const { model, Schema } = require("mongoose");

const BooksSchema = new Schema(
  {
    booktitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    bookPrice: { type: Number, default: 50 },
    bookImage: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Books", BooksSchema);
