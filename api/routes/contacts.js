const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Contact = require("../models/contact");
const { CreateContact, getAllContacts, getContactById, updateContactById, deleteContactById } = require("../controllers/contacts");


router.post("/contacts", CreateContact);

router.get("/contacts", getAllContacts);

router.get("/contacts/:id", getContactById);

router.patch("/contacts/:id", updateContactById);

router.delete("/contacts/:id", deleteContactById);

module.exports = router;