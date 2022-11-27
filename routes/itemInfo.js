const express = require('express');
const router = express.Router();

const itemInfo = require('../schemas/itemInfo');

router.get('/', function (req, res, next) {
  itemInfo
    .find()
    .then((items) => {
      res.status(200).json({
        message: 'Success',
        data: {
          itemInfo: items,
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
  const itemInfoModel = new itemInfo({
    itemName: req.body.itemName,
    price: req.body.price,
    registerDate: req.body.registerDate,
    company: req.body.company,
  });

  itemInfoModel
    .save()
    .then((newItem) => {
      res.status(200).json(newItem);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
