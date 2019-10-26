const router = require("express").Router();
const addworkerController = require("../controllers/addworkerController.js");

router
  .route("/")
  .get(addworkerController.findAll)
  .post(addworkerController.create);

// router.get("/:username", managerviewController.find);

router
  .route("/id/:id")
  .delete(addworkerController.remove)
  .put(addworkerController.update);

router.route("/name/:userName").get(addworkerController.find);

module.exports = router;
