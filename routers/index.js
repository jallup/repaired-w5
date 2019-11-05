var express = require("express");
var router = express.Router();

var Post = require("../controllers/playController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
  Post.create();
});

module.exports = router;
