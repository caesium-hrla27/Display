console.log("routes.js loaded");
const router = require("express").Router();
const controller = require("./controller.js");

router
  .route("/")
  .get(controller.get)
  .post(controller.post);

router.route("/getinfo/").get(controller.getInfo);

router.route("/getcolors").get(controller.getColors);

router.route("/getpictures").get(controller.getPicutres);

module.exports = router;
