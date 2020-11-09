const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  authors: {
      type: Array,
      trim: true,
      ref: "Author"
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
      type: String,
      ref: "Link"
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;