const router = require("express").Router();
const userController = require("../controllers/userContoller.js");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/id/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/name/:userName").get(userController.find);

module.exports = router;
