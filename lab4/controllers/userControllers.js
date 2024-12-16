const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models/User");

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("error ", error.message);
    res.status(500).json("Server error");
  }
};

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("error ", error.message);
    res.status(500).json("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("email and password are required");
  }
  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      return res.status(401).json("Bad email or password");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("error ", error.message);
    res.status(500).json("Server error");
  }
};

module.exports = {
  getUser,
  register,
  login,
};
