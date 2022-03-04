const User = require("../models/user");
const CryptoJS = require("crypto-js");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send({ message: "List all users", payload: user });
  } catch (err) {
    res.status(500).json(err);
  }
};
const removeUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

const editUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.encrypt
    ).toString();
  }
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  removeUser,
  editUser,
};
