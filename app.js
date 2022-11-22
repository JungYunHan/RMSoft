const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB 연결
mongoose
  .connect('mongodb://mongo:27017/rm-mart', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const ItemInfo = require('./models/itemInfo');
const RegisterCompany = require('./models/registerCompany');
const Buyer = require('./models/buyer');
const PurchaseInfo = require('./models/purchaseInfo');

app.get('/item', (req, res) => {
  ItemInfo.find()
    .then((items) => res.render('index', { items }))
    .catch((err) => res.status(404).json({ msg: '등록된 상품이 없습니다.' }));
});

app.get('/company', (req, res) => {
  RegisterCompany.find()
    .then((company) => res.render('index', { items }))
    .catch((err) => res.status(404).json({ msg: '등록된 업체가 없습니다.' }));
});

app.get('/buyer', (req, res) => {
  Buyer.find()
    .then((buyer) => res.render('index', { items }))
    .catch((err) => res.status(404).json({ msg: '구매자가 없습니다.' }));
});

app.get('/purchase', (req, res) => {
  PurchaseInfo.find()
    .then((purchase) => res.render('index', { items }))
    .catch((err) => res.status(404).json({ msg: '구매 정보가 없습니다.' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new ItemInfo({
    itemName: req.body.itemName,
    price: req.body.price,
    registerDate: req.body.registerDate,
    company: req.body.company,
  });

  newItem.save().then((item) => res.redirect('/'));
});

app.post('/company/add', (req, res) => {
  const newCompany = new RegisterCompany({
    company: req.body.company,
    ceo: req.body.ceo,
    companyPhone: req.body.companyPhone,
  });

  newCompany.save().then((company) => res.redirect('/'));
});

app.post('/buyer/add', (req, res) => {
  const newBuyer = new Buyer({
    buyerName: req.body.buyerName,
    phoneNumber: req.body.phoneNumber,
  });

  newBuyer.save().then((buyer) => res.redirect('/'));
});

app.post('/purchase/add', (req, res) => {
  const newPurchaseInfo = new PurchaseInfo({
    purchaseNumber: req.body.purchaseNumber,
    itemInfo: req.body.itemInfo,
    buyer: req.body.buyer,
    price: req.body.price,
    purchaseDate: req.body.purchaseDate,
  });

  newPurchaseInfo.save().then((purchaseInfo) => res.redirect('/'));
});

const port = 3000;
app.listen(port, () => console.log('Server running...'));
