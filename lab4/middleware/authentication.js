const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            return res.status(401).json("auth not found");
        }
        const token = auth.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error("error ", error.message);
        res.status(401).json("Unauthorized");
    }
};