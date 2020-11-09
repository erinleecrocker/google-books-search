const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Book.find({}).then((foundBooks) => {
    res.json(foundBooks);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: true,
      data: null,
      message: "Failed to retrieve all books.",
    });
  });
});

router.post("/api/books", (req, res) => {
  const newBook = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  };
  db.Book.create(newBook).then((newBook) => {
    res.json(newBook);
  });
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
