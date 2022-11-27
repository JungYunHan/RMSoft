const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * 상품정보, 구매자, 금액, 구매일자, 구매번호
 */
const purchaseInfoSchema = new Schema({
  itemInfo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'itemInfo',
      index: true,
      required: true,
    },
  ],
  buyer: [
    {
      type: Schema.Types.ObjectId,
      ref: 'buyer',
      index: true,
      required: true,
    },
  ],
  price: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: String,
    required: true,
  },
  purchaseNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('purchaseInfo', purchaseInfoSchema);
