const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  buyerName: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('buyer', buyerSchema);
