const router = require("express").Router();
const user = require("../model/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Login
router.post("/login", async (req, res) => {
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
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "15m" }
    );

    res.status(200).json({ result: existingUser, token, message: "login Successful" });
  } catch (error) {
    res.status(500).json({ message: "somehting went wrong" });
  }
});

// stignup
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword,role } = req.body;

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
});

router.get("/GET/AllStudents", async (req,res) => {
  try {
      const allStudents = await user.find({role:"student"});

      return res.json({result: allStudents});
  } catch (error) {
      
  }
})

router.get("/GET/Allinstructor", async (req,res) => {
  try {
      const Allinstructor = await user.find({role:"instructor"});

      return res.json({result: Allinstructor});
  } catch (error) {
      
  }
})



module.exports = router;