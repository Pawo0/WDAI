const express = require("express");
const app = express();

app.use(express.json());


// serwis 1
const serwis1 = require("./routes/serwis1");
app.use("/api/books/", serwis1);

// serwis 2
const serwis2 = require("./routes/serwis2");
app.use("/api/orders", serwis2);

// serwis 3
const serwis3 = require("./routes/serwis3");
app.use("/api/", serwis3);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
