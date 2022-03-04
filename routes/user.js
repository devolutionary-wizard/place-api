const { getAllUsers, removeUser, editUser } = require("../controllers/user");

const router = require("express").Router();

router.get("/", getAllUsers);
router.delete("/:id", removeUser);
router.put("/:id", editUser);

module.exports = router;
