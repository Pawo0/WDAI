const express = require("express");
const router = express.Router();
const { login, register, getUser } = require("../controllers/userControllers");

router.get("/users", getUser);

router.post("/register/", register);

router.post("/login/", login);

module.exports = router;
