const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            return res.status(401).json("token not found");
        }
        const token = auth.split(" ")[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.error("error ", error.message);
        res.status(401).json("bad token");
    }
};