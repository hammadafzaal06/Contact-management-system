const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contacts: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
});


module.exports = mongoose.model("User", userSchema)
