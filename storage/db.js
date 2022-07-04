const mongoose = require("mongoose");



const connection = mongoose.connect(
    "mongodb+srv://jeny8898:jeny8898@cluster0.ysfbl.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = connection;
