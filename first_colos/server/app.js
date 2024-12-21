const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/kolor", (req, res) => {
    return res.json({ kolor: "blue" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});