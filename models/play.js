var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    playBoard: { type: String }
  },
  { collection: "playBoard" }
);

// Export model.
module.exports = mongoose.model("Post", PostSchema);
