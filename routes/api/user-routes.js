const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Дописать /api/users
router.route("/").get(getAllUsers).post(createUser);

// удалить /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// удалить из друзей
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
