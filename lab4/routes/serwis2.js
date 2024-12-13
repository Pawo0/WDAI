const express = require("express");
const router = express.Router();
const {
  getOrders,
  getOrdersByUserId,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControlls");

// middleware
const authentication = require("../middleware/authentication");

router.get("/", getOrders);

router.get("/:userId", getOrdersByUserId);

router.post("/", authentication, addOrder);

router.delete("/:id", authentication, updateOrder);

router.patch("/:id", authentication, deleteOrder);

module.exports = router;
