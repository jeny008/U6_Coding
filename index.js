const express = require("express");
const connection = require("./storage/db");
const UserSchema = require("./model/UserSchema")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(8080, async () => {
    try {
        await connection;
        console.log("connection successfull");
    } catch (error) {
        console.log("failed to connect");
    }
});
