const { Schema, model } = require("mongoose")

let InstructorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    batch: String,
})

let Instructor = model("instructor", InstructorSchema)

module.exports = Instructor;