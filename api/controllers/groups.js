const Group = require("../models/group");
const { findById } = require("../models/user");

const getAllGroups = async (req, res, next) => {
  try {
    const docs = await Group.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is all the Groups",
      group: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getGroupById = async (req, res, next) => {
  try {
    const doc = await Group.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "This is the Group",
      group: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const CreateGroup = async (req, res, next) => {
  try {
    const group = new Group(req.body);
    const doc = await group.save();
    console.log(doc);
    res.status(201).json({
      message: " Group created Successfully",
      group: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateGroupById = async (req, res, next) => {
  try {
    const result = await Group.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: " Group updated Successfully",
      group: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteGroupById = async (req, res, next) => {
  try {
    const result = await Group.findByIdAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: " Group Deletd Successfully",
      group: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllGroups,
  getGroupById,
  CreateGroup,
  updateGroupById,
  deleteGroupById,
};
