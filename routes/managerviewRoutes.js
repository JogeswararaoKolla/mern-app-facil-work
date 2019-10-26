const router = require("express").Router();
const managerviewController = require("../controllers/managerviewController.js");

router
  .route("/")
  .get(managerviewController.findAll)
  .post(managerviewController.create);

// router.get("/:username", managerviewController.find);

router
  .route("/id/:id")
  .delete(managerviewController.remove)
  .put(managerviewController.update);

module.exports = router;
