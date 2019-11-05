const express = require("express");

const app = express();
var path = require("path");

var Post = require("../controllers/playController");

var indexRouter = require("../routers/index");
var playRouter = require("../routers/playRouter");

// var Post = require("../controllers/playController");

//var router = express.Router();

//var boardcontrol = require("../src/boardcontrol");

app.set("views", path.join(__dirname, "../views/"));
//pp.set("views", "./views");

app.set("view engine", "pug");

app.use(express.static("views"));

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

app.use(express.static(path.join(__dirname, "public")));
//app.post("js");
app.use("/", indexRouter);
app.use("/play", playRouter);

//let db = client.db("game");
/*app.get("/", function(req, res) {
  res.render("index", { head: "Hey" });
  res.post("../src/js");
  Post.create();
  //db.save({ name: "John Wick" });
  //app.post("boardcontrol");
  //router.post("boardcontrol", boardcontrol.poster);
});*/
//
app.listen(8080);

exports.module = app;
