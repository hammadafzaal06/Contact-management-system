const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");
const { createUser, getAllUsers, getUserById, updateUserById, deleteUsersById } = require("../controllers/users");


router.post("/users", createUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.patch("/users/:id", updateUserById);

router.delete("/users/:id", deleteUsersById);

module.exports = router;