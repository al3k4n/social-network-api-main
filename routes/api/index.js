const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/authorization", userAuthorization);
router.use("/user", thoughtRoutes);
router.use("/post", thoughtRoutes);
router.use("/category", thoughtRoutes);
router.use("/comment", thoughtRoutes);
router.use("/like", thoughtRoutes);
// TODO User entity и Post entity