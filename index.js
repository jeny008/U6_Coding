const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRouter");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`serverstart on server ${PORT}`));


app.use("/", router);
mdb_connect =
    "mongodb+srv://jeny8898:jeny8898@cluster0.ysfbl.mongodb.net/?retryWrites=true&w=majority"
    ;
mongoose.connect(
    mdb_connect,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) return console.error(err);
        console.log("connected to MongoDB");
    }
);