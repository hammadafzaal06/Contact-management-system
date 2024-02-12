const Contact = require("../models/contact");

const getAllContacts = async (req, res, next) => {
  try {
    const docs = await Contact.find();
    console.log(docs);
    res.status(201).json({
      message: " Here is the list of All the Contacts",
      contact: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getContactById = async (req, res, next) => {
  try {
    const doc = await Contact.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: " This is the Contact",
      contact: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: err,
    });
  }
};

const CreateContact = async (req, res, next) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
    });
    const doc = await contact.save();
    console.log(doc);
    res.status(201).json({
      message: "Contact Created Successfully",
      contact: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateContactById = async (req, res, next) => {
  try {
    const result = await Contact.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          adress: req.body.adress,
        },
      },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: " Contact Updated Successfully",
      contact: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const result = await Contact.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "Conatct Deleted SuccessFully",
      contact: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  CreateContact,
  updateContactById,
  deleteContactById,
};
