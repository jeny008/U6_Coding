const studentControl = require("../Controller/sudentController")
const adminControl = require("../Controller/adminController")
const instructorControl = require("../Controller/instructorController")

const router = require("express").Router();

// Login
router.route("/login").post();

//StudentRegister
router.route("/studentregister").post();

//InstructorRegister
router.route("/instructorregister").post();

//get list of student
router.route("/getlistofstudent").get();

//get list of instructor
router.route("/getlistofinstructor").get();

//get student by id
router.route("/getstudentbyid/:id").get();

//get instructor by id
router.route("/getinstructorbyid/:id").get();

//move student
router.route("/movestudent").put()

//delete student by id
router.route("/deletestudentbyid/:id").delete()



module.exports = router;