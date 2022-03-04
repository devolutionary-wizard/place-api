const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
  getOneCategory,
  removeCategory,
  editCategory,
} = require("../controllers/category");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyTokenAndAdmin, createCategory);
router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.delete("/:id", verifyTokenAndAdmin, removeCategory);
router.put("/:id", verifyTokenAndAdmin, editCategory);
module.exports = router;
