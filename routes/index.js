const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const managerviewRoutes = require("./managerviewRoutes.js");
const timesheet = require("./timesheetRoutes.js");
const material = require("./materialRoutes.js");

router.use("/api/users/", userRoutes);
router.use("/api/manager", managerviewRoutes);
router.use("/api/timesheet", timesheet);
router.use("/api/material", material);

module.exports = router;
