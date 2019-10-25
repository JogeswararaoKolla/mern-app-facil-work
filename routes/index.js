const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const managerviewRoutes = require("./managerviewRoutes.js");

router.use("/api/users/", userRoutes);
router.use("/api/manager", managerviewRoutes);

module.exports = router;
