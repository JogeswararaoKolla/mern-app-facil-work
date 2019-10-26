const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const managerviewRoutes = require("./managerviewRoutes.js");
<<<<<<< HEAD
const addworkerRoutes = require("./addworkerRoutes.js");

router.use("/api/users/", userRoutes);
router.use("/api/manager", managerviewRoutes);
router.use("/api/worker", addworkerRoutes);
=======
const timesheet = require("./timesheetRoutes.js");
const material = require("./materialRoutes.js");

router.use("/api/users/", userRoutes);
router.use("/api/manager", managerviewRoutes);
router.use("/api/timesheet", timesheet);
router.use("/api/material", material);
>>>>>>> 09980fb458cf16f8803d2084e92255244d890acb

module.exports = router;
