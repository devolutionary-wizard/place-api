const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const Place = require("../models/place");

const createPlace = async (req, res) => {
  try {
    // const { name, desc, image, category } = req.body;
    const place = await Place.findById(req.params.id);
    if (place)
      return res.status(400).json({ message: "This Place already exists " });
    const newPlace = new Place({
      name: req.body.name,
      desc: req.body.desc,
      image: req.file.path,
      category: req.body.category,
    });
    const savePlace = await newPlace.save();
    res.status(201).json(savePlace);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPlaces = async (req, res) => {
  try {
    const place = await Place.find();
    res.send({ message: "List all Place", payload: place });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    res.send({ message: "List of place you want to know ", payload: place });
  } catch (err) {
    res.status(500).json(err);
  }
};

const removePlace = async (req, res) => {
  try {
    const deletePlace = await Place.findByIdAndDelete(req.params.id);
    res.status(200).json("Place has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

const editPlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPlace,
  getAllPlaces,
  getPlace,
  removePlace,
  editPlace,
};
