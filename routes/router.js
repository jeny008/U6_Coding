const studentControl = require("../Controller/sudentController")
const adminControl = require("../Controller/adminController")
const instructorControl = require("../Controller/instructorController")
const loginControl = require("../Controller/loginController")
const isAuth = require("../Middelware/auth")

const router = require("express").Router();

// Login
router.route("/login").post(loginControl.login);

//Register
router.route("/register").post(loginControl.register);

//get list of student
router.route("/getlistofstudent").get(isAuth.isLoggedin, isAuth.isInstructor, adminControl.viewAllStudent);

//get list of instructor
router.route("/getlistofinstructor").get(isAuth.isLoggedin, isAuth.isAdmin, adminControl.viewAllInstructor);

//get student by id
router.route("/getstudentbyid/:id").get(isAuth.isLoggedin, adminControl.getStudentById);

//get instructor by id
router.route("/getinstructorbyid/:id").get();

//move student
router.route("/movestudent").put()

//delete student by id
router.route("/deletestudentbyid/:id").delete()



module.exports = router;