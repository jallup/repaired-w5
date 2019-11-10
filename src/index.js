const express = require("express");

const app = express();

var path = require("path");

// Router for index
var indexRouter = require("../routers/index");

// Router for the "game engine"
var playRouter = require("../routers/playRouter");

// MongoDB connection
var Promise = require("bluebird");

var mongoose = require("mongoose");
// For local dev
// var dev_db_url = 'mongodb://localhost:27017'
var dev_db_url =
  "mongodb+srv://jallu:saab9000aerohot@cluster0-klm10.mongodb.net/test?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { dbName: "game" });
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set("views", path.join(__dirname, "../views/"));
//pp.set("views", "./views");

// Set pug as view engine
app.set("view engine", "pug");

// Serve static file from these directories
app.use(express.static("views"));
app.use(express.static("src"));

//app.post("js");
app.use("/", indexRouter);
app.use("/play", playRouter);

app.listen(8080);

function transfer(board) {
  console.log(board);
}
