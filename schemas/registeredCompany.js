const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * 등록업체명, 업체대표자명, 전화번호
 */
const registeredCompanySchema = new Schema({
  company: {
    type: String,
    required: true,
    unique: true,
  },
  ceoName: {
    type: String,
    required: true,
  },
  companyNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('registeredCompany', registeredCompanySchema);
