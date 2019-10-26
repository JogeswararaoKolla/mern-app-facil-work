const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const managerviewRoutes = require("./managerviewRoutes.js");
const addworkerRoutes = require("./addworkerRoutes.js");

router.use("/api/users/", userRoutes);
router.use("/api/manager", managerviewRoutes);
router.use("/api/worker", addworkerRoutes);

module.exports = router;
