const router = require("express").Router();
const materialController = require("../controllers/materialController.js");

router
  .route("/")
  .get(materialController.findAll)
  .post(materialController.create);

router
  .route("/:id")
  .delete(materialController.remove)
  .put(materialController.update);

module.exports = router;
