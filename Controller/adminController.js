const user = require("../model/user");


class adminController {

    static viewAllStudent = async (req, res) => {
        try {
            const allStudent = await user.find({ role: "student" });
            res.status(200).json({ student: allStudent })
        }
        catch (err) {
            res.status(500).json({ msg: "Internal Server Error" })
        }
    }

    static viewAllInstructor = async (req, res) => {
        try {
            const allStudent = await user.find({ role: "instructor" });
            res.status(200).json({ student: allStudent })
        }
        catch (err) {
            res.status(500).json({ msg: "Internal Server Error" })
        }
    }

    static getStudentById = async (req, res) => {
        try {
            const { id } = req.params;
            const userdata = await user.findById(id);
            if (!userdata) {
                return res.status(400).json({ msg: "user not found" })
            }
            else if (req.user.user == "student") {
                if (req.user.id != id) {
                    return res.status(400).json({ msg: "Not Valid User" })
                }
            }
            return res.status(200).json({ msg: userdata })

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Internal Server Error" })
        }
    }

}

module.exports = adminController
