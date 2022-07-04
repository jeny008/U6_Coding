const jwt = require("jsonwebtoken");

class userAuth {

    static isLoggedin = async (req, res, next) => {
        try {
            if (!req.cookies.AuthToken) {
                res.status(400).send("Please Login !");
            }
            else {
                const token = await (jwt.verify(req.cookies.AuthToken, "test"));
                req.user = token;
                next();
            }
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    static isUser = (req, res, next) => {
        try {
            if (req.user.user == "student" || req.user.user == "admin") {
                next();
            }
            else {
                res.status(400).send("Not Valid User");
            }
        } catch (error) {
            res.status(500).send("Internal Error Occurs");
        }
    }

    static isInstructor = (req, res, next) => {
        try {
            if (req.user.user == "instructor" || req.user.user == "admin") {
                next();
            }
            else {
                res.status(400).send("Not Valid User");
            }
        } catch (error) {
            res.status(500).send("Internal Error Occurs");
        }
    }

    static isAdmin = (req, res, next) => {
        try {
            if (req.user.user == "admin") {
                next();
            }
            else {
                res.status(400).send("Not Valid User");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Error Occurs");
        }
    }

}


module.exports = userAuth;