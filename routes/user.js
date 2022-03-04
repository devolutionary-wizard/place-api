const { getAllUsers, removeUser, editUser } = require("../controllers/user");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const router = require("express").Router();

router.get("/", verifyTokenAndAdmin, getAllUsers);
router.delete("/:id", verifyTokenAndAuthorization, removeUser);
router.put("/:id", verifyTokenAndAuthorization, editUser);

module.exports = router;
