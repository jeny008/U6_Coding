const { Schema, model } = require("mongoose")

let UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    batch: String,
})

let Student = model("student", UserSchema)

module.exports = Student;