const express = require("express");
const connection = require("./storage/db");
const router = require("./routes/router")
const cookieparser = require("cookie-parser")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser());
app.use("/", router)


app.listen(8080, async () => {
    try {
        await connection;
        console.log("connection successfull");
    } catch (error) {
        console.log("failed to connect");
    }
});
