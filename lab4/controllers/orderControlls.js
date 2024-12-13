const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the orders database.");
});

const getOrders = (req, res) => {
  const query = "select * from orders";
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(200).json(rows);
  });
};

const getOrdersByUserId = (req, res) => {
  const { userId } = req.params;
  const query = "select * from orders where user_id = ?";
  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(200).json(rows);
  });
};

const addOrder = (req, res) => {
  const { book_id, quantity } = req.body;
  const user_id = req.user.id;
  if (!book_id || !user_id || !quantity) {
    return res.status(400).json("book_id, user_id, quantity are required");
  }

  const get_book = "select * from books where id = ?";
  db.get(get_book, [book_id], (err, book) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    if (!book) {
      return res.status(404).json("Book not found");
    }
  });

  const query =
    "insert into orders (book_id, user_id, quantity) values (?, ?, ?)";
  db.run(query, [book_id, user_id, quantity], (err) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    res.status(200).json("Order successfully created");
  });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  const query = "delete from orders where id = ?";
  db.run(query, [id], function (err) {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }
    if (this.changes === 0) {
      return res.status(404).json(`Order with id ${id} not found`);
    }
    res.status(200).json(`Order with id ${id} successfully deleted`);
  });
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  const get_old_order = "select * from orders where id = ?";
  db.get(get_old_order, [id], (err, old_order) => {
    if (err) {
      console.error("error ", err.message);
      return res.status(500).json("Server error");
    }

    if (!old_order) {
      return res.status(404).json(`Order with id ${id} not found`);
    }

    const new_book_id = req.body.book_id || old_order.book_id;
    const new_user_id = req.body.user_id || old_order.user_id;
    const new_quantity = req.body.quantity || old_order.quantity;

    const query =
      "update orders set book_id = ?, user_id = ?, quantity = ? where id = ?";
    db.run(query, [new_book_id, new_user_id, new_quantity, id], (err) => {
      if (err) {
        console.error("error ", err.message);
        return res.status(500).json("Server error");
      }
      res.status(200).json(`Order with id ${id} successfully updated`);
    });
  });
};

module.exports = {
  getOrders,
  getOrdersByUserId,
  addOrder,
  deleteOrder,
  updateOrder,
};
