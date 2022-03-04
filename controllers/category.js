const Category = require("../models/category");

const createCategory = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const newCat = new Category({
      name,
      desc,
    });
    const saveCat = await newCat.save();
    res.status(201).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const cat = await Category.find();
    res.status(200).send({ message: "List All Categories", payload: cat });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneCategory = async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    res.status(200).send({ message: "One Category", payload: cat });
  } catch (err) {
    res.status(500).json(err);
  }
};

const removeCategory = async (req, res) => {
  try {
    const cat = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been delete.");
  } catch (err) {
    res.status(500).json(err);
  }
};

const editCategory = async (req, res) => {
  try {
    const updateCat = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateCat);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getOneCategory,
  removeCategory,
  editCategory,
};
