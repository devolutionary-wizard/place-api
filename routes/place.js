const router = require("express").Router();
const { upload } = require("../services/imageUpload");
const {
  createPlace,
  getAllPlaces,
  getPlace,
  removePlace,
  editPlace,
} = require("../controllers/place");

router.post("/", upload.single("placeImage"), createPlace);
router.get("/", getAllPlaces);
router.get("/:id", getPlace);
router.delete("/:id", removePlace);
router.put("/:id", editPlace);

module.exports = router;
