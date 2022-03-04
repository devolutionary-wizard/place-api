const router = require("express").Router();
const {
  createCategory,
  getAllCategories,
  getOneCategory,
  removeCategory,
  editCategory,
} = require("../controllers/category");

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.delete("/:id", removeCategory);
router.put("/:id", editCategory);
module.exports = router;
