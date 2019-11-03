var express = require("express");
var router = express.Router();

// Require controllers
var play_controller = require("../controllers/playController");

// GET post listing page
router.get("/", play_controller.index);

// POST request for creating a new post
router.post("/create", play_controller.create);

module.exports = router;
