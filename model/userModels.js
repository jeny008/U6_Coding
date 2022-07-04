const { Schema, model } = require("mongoose");

let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
  },
  batch: String,
});

let user = model("user", userSchema);

module.exports = user;