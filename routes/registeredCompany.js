const express = require('express');
const router = express.Router();

const registeredCompany = require('../schemas/registeredCompany');

router.get('/', function (req, res, next) {
  registeredCompany
    .find()
    .then((companies) => {
      res.status(200).json({
        message: 'Success',
        data: {
          registeredCompany: companies,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

router.post('/', function (req, res, next) {
  const registeredCompanyModel = new registeredCompany({
    company: req.body.company,
    ceoName: req.body.ceoName,
    companyNumber: req.body.companyNumber,
  });

  registeredCompanyModel
    .save()
    .then((newCompany) => {
      res.status(200).json(newCompany);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
