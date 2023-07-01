const shirts = require('express').Router();
const db = require('../models');
const { Shirt } = db;

// GET All Shirts
shirts.get('/', async (req, res) => {
  try {
    const foundShirts = await Shirt.findAll();
    res.status(200).json(foundShirts);
  } catch (err) {
    res.status(500).send('Server error');
    console.log(err);
  }
});

module.exports = shirts;
