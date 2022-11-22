const mongoose = require('mongoose');

const purchaseInfoSchema = new mongoose.Schema({
  purchaseNumber: { type: Number, required: true, unique: true },
  itemInfo: { type: String, required: true },
  buyer: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseDate: { type: String, required: true },
});

module.exports = mongoose.model('purchaseInfo', purchaseInfoSchema);
