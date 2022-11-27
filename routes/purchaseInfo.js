const express = require('express');
const router = express.Router();

const purchaseInfo = require('../schemas/purchaseInfo');

router.get('/', function (req, res, next) {
  purchaseInfo
    .find()
    .populate('itemInfo')
    .populate('buyer')
    .then((purchases) => {
      res.status(200).json({
        message: 'Success',
        data: {
          purchaseInfo: purchases,
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
  const purchaseInfoModel = new purchaseInfo({
    itemInfo: req.body.itemInfo,
    buyer: req.body.buyer,
    price: req.body.price,
    purchaseDate: req.body.purchaseDate,
    purchaseNumber: req.body.purchaseNumber,
  });

  purchaseInfoModel
    .save()
    .then((newPurchase) => {
      res.status(200).json(newPurchase);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
