const express = require("express");
const path=require("path");
const cookieParser = require("cookie-parser");
const {connectToMongoDB} = require("./connect");
const {restrictTo, checkForAuthentication} = require("./middleware/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticsRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");


const app=express();
const PORT=8001;

// connectionDatabase

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(() => console.log("Mongodb Connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);




app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticsRoute);

app.get('/url/:shortId', urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));