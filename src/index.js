const express = require("express");

const app = express();

//var router = express.Router();

//var boardcontrol = require("../src/boardcontrol");

app.set("views", "./views");

app.set("view engine", "pug");

app.use(express.static("views"));

//var mongoose = require("mongoose");
// For local dev
// var dev_db_url = 'mongodb://localhost:27017'
/*var dev_db_url =
  "mongodb+srv://jallu:saab9000aerohot@cluster0-klm10.mongodb.net/test?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));*/
/*
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jallu:saab9000aerohot@cluster0-klm10.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("game").collection("playBoard");
  collection.insert({ name: "John Wick" });
  client.close();
});*/

app.get("/", function(req, res) {
  res.render("index", { head: "Hey" });
  app.post("js");
  //db.save({ name: "John Wick" });
  //app.post("boardcontrol");
  //router.post("boardcontrol", boardcontrol.poster);
});

app.listen(8080);

// GET post listing page
//router.get("/", boardcontrol.index);
