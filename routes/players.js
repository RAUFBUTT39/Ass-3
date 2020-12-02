var express = require("express");
var router = express.Router();
var Player = require("../models/player");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let players = await Player.find();
  // console.log(players);
  res.render("players/list", { title: "Players In DB", players });
});

router.get("/add", async function (req, res, next) {
  res.render("players/add");
});
//storing data in DB
router.post("/add", async function (req, res, next) {
  let player = new Player(req.body);
  await player.save();
  res.redirect("/players");
});

router.get("/delete/:id", async function (req, res, next) {
  let player = await Player.findByIdAndDelete(req.params.id);
  res.redirect("/players");
});

router.get("/edit/:id", async function (req, res, next) {
  let player = await Player.findById(req.params.id);
  res.render("players/edit", { player });
});

router.post("/edit/:id", async function (req, res, next) {
  let player = await Player.findById(req.params.id);
  player.name = req.body.name;
  player.team = req.body.team;
  await player.save();
  res.redirect("/players");
});
module.exports = router;
