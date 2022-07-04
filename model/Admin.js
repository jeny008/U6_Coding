const { Schema, model } = require("mongoose")

let AdminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    batch: String,
})

let Admin = model("admin", AdminSchema)

module.exports = Admin;