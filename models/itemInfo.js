const mongoose = require('mongoose');

const itemInfoSchema = new mongoose.Schema({
  itemName: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  registerDate: { type: String, required: true },
  company: { type: String, required: true },
});

module.exports = mongoose.model('ItemInfo', itemInfoSchema);
