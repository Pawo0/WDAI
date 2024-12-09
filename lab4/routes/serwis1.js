const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the books database.");
});

router.get("/", (req, res) => {
  const query = "select * from books";
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(200).json(rows);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = "select * from books where id = ?";
  db.all(query, [id], (err, rows) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(200).json(rows);
  });
});

router.post("/", (req, res) => {
  // there is no year column
  const { title, content, date, author } = req.body;
  const query =
    "insert into books (title, content, date, author) values (?,?,?,?)";
  db.run(query, [title, content, date, author], function (err) {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(201).json("added book with id " + this.lastID);
  });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const query = "delete from books where id = ?";
  db.run(query, [id], function (err) {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    if (this.changes === 0) {
      return res.status(404).json(`Book with id ${id} not found`);
    }
    res.status(200).json(`Book with id ${id} successfully deleted`);
  });
});

module.exports = router;
