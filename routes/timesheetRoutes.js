const router = require("express").Router();
const timesheetController = require("../controllers/timesheetController.js");

router
  .route("/")
  .get(timesheetController.findAll)
  .post(timesheetController.create);

router
  .route("/:id")
  .delete(timesheetController.remove)
  .put(timesheetController.update);

module.exports = router;
