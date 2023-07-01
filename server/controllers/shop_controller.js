const shop = require('express').Router();
const db = require('../models');
const { Shop } = db;

// GET All shop items
shop.get('/', async (req, res) => {
  try {
    const foundShop = await shop.findAll();
    res.status(200).json(foundShop);
  } catch (err) {
    res.status(500).send('Server error');
    console.log(err);
  }
});

module.exports = shop;