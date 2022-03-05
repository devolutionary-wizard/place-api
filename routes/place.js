const router = require("express").Router();
const { upload } = require("../services/imageUpload");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  createPlace,
  getAllPlaces,
  getPlace,
  removePlace,
  editPlace,
} = require("../controllers/place");

router.post("/", verifyTokenAndAdmin, upload.single("image"), createPlace);
router.get("/", getAllPlaces);
router.get("/:id", getPlace);
router.delete("/:id", verifyTokenAndAdmin, removePlace);
router.put("/:id", verifyTokenAndAdmin, editPlace);

module.exports = router;
