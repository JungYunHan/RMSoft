const express = require('express');
const router = express.Router();

const buyer = require('../schemas/buyer');

router.get('/', function (req, res, next) {
  buyer
    .find()
    .then((buyers) => {
      res.status(200).json({
        message: 'Success',
        data: {
          buyer: buyers,
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
  const buyerModel = new buyer({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
  });

  buyerModel
    .save()
    .then((newBuyer) => {
      res.status(200).json(newBuyer);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
