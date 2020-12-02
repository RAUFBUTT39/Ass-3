var mongoose = require("mongoose");

var playerSchema = mongoose.Schema({
  name: String,
  team: String,
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
