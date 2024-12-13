const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
