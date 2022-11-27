const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * 상품명, 금액, 등록일자, 등록업체명
 */
const itemInfoSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  registerDate: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('itemInfo', itemInfoSchema);
