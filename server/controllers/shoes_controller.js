const shoes = require('express').Router();
const db = require('../models');
const { Shoes } = db;

// GET All Shoes
shoes.get('/', async (req, res) => {
  try {
    const foundShoes = await Shoes.findAll();
    res.status(200).json(foundShoes);
  } catch (err) {
    res.status(500).send('Server error');
    console.log(err);
  }
});

module.exports = shoes;
