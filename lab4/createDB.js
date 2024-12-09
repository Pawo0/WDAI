const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

deleteTables()
setTimeout(createTables, 500);

function deleteTables() {
  // const deleteTable = "DROP TABLE IF EXISTS books";
  // db.run(deleteTable, (err) => {
  //   if (err) {
  //     console.error("error ", err.message);
  //     return;
  //   }
  //   console.log("Table books deleted");
  // });
  //
  // const deleteTable2 = "DROP TABLE IF EXISTS orders";
  // db.run(deleteTable2, (err) => {
  //   if (err) {
  //     console.error("error ", err.message);
  //     return;
  //   }
  //   console.log("Table orders deleted");
  // });


  const deleteTable3 = "DROP TABLE IF EXISTS users";
  db.run(deleteTable3, (err) => {
    if (err) {
      console.error("error ", err.message);
      return;
    }
    console.log("Table users deleted");
  });
}

function createTables() {
  const query =
    "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT DEFAULT 'jakas fajna tresc', author TEXT, date DATE, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)";
  db.run(query, (err) => {
    if (err) {
      console.error("error ", err.message);
      return;
    }
    console.log("Table books created");
  });

  const query2 =
    "CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, book_id INTEGER, user_id INTEGER, quantity INTEGER, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY(book_id) REFERENCES posts(id), FOREIGN KEY(user_id) REFERENCES users(id))";
  db.run(query2, (err) => {
    if (err) {
      console.error("error ", err.message);
      return;
    }
    console.log("Table orders created");
  });
  const query3 =
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)";

  db.run(query3, (err) => {
    if (err) {
      console.error("error ", err.message);
      return;
    }
    console.log("Table users created");
  });
}
