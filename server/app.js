const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const app = express();
dotenv.config({ path: './config.env' });
//require('./db/conn');
const PORT = process.env.PORT;

//const User = require('./userSchema')
//DB CONNECTION
const DB = process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('./router/auth'));
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})