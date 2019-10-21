const router = require("express").Router();
const useRoutes = require("./userRoutes.js");

router.use("/api/users/", useRoutes);

module.exports = router;
