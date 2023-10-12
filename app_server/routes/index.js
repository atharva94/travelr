var express = require("express");
var router = express.Router();
const ctrlMain = require("../controllers/main");
const tripsController = require("../controllers/trips");

router.get("/", ctrlMain.index);

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);

module.exports = router;
