const mongoose = require('mongoose');

const registerCompanySchema = new mongoose.Schema({
  company: { type: String, required: true, unique: true },
  ceo: { type: String, required: true },
  companyPhone: { type: String, required: true },
});

module.exports = mongoose.model('registerCompany', registerCompanySchema);
