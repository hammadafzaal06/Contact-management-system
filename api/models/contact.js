const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true , default: true},
  email: { type: String, required: true , default: true},
  phone: { type: String, required: true , default: true},
  address: {type: String, required: true, default: true}
  // Add other fields as needed
});

module.exports= mongoose.model('Contact', contactSchema);

