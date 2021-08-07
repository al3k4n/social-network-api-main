const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// дальше дописать это здесь /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// а это удалить(!) /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
