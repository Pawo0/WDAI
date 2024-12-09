const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error("error ", error.message);
        res.status(500).json("Server error");
    }
});


router.post('/register/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error("error ", error.message);
        res.status(500).json("Server error");
    }
})

router.post('/login/', async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json("email and password are required");
    }
    try {
        const user = await User.findOne({
            where: {
                email,
                password
            }
        })
        if (!user) {
            return res.status(404).json("Bad email or password");
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("error ", error.message);
        res.status(500).json("Server error");
    }
})

module.exports = router;
