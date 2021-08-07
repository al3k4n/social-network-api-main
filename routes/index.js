const router = require("express").Router();
// импортируем экспресс 
const apiRoutes = require("./api");

// не забыть прописать в директории`api` directory
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>404 ERROR!</h1>");
});

module.exports = router;
