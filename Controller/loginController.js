const router = require("express").Router();
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class loginController {
    static login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const existingUser = await user.findOne({ email });

            if (!existingUser) {
                return res.json({ message: "user doesnot exist" });
            }
            const isPasswordCorrect = await bcrypt.compare(
                password,
                existingUser.password
            );

            if (!isPasswordCorrect) {
                return res.json({ message: "Invalid Credentials" });
            }

            const token = jwt.sign(
                { email: existingUser.email, id: existingUser._id, user: existingUser.role },
                "test",
                { expiresIn: "15m" }
            );

            res.cookie("AuthToken", token).set("AuthToken", token).status(200).json({ result: existingUser, token, message: "login Successful" });
        } catch (error) {
            res.status(500).json({ message: "somehting went wrong" });
        }
    }

    static register = async (req, res) => {
        const { firstName, lastName, email, password, confirmPassword, role } = req.body;

        try {
            const existingUser = await user.findOne({ email });

            if (existingUser) {
                return res.json({ message: "user already exist" });
            }

            if (password !== confirmPassword) {
                return res.json({ message: "Password didn't match" });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await user.create({
                email,
                password: hashedPassword,
                name: `${firstName} ${lastName}`,
                role,
            });

            const token = jwt.sign({ email: result.email, id: result._id }, "test", {
                expiresIn: "1h",
            });

            res.json({ result, token, message: "User Created Successfully" });
        } catch (error) {
            res.status(500).json({ message: "somehting went wrong" });
        }
    }
}

module.exports = loginController