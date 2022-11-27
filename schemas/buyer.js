const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * 이름, 연락처
 */
const buyerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('buyer', buyerSchema);
