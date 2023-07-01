const pants = require('express').Router();
const db = require('../models');
const { Pants } = db;

// GET All Pants
pants.get('/', async (req, res) => {
  try {
    const foundPants = await Pants.findAll();
    res.status(200).json(foundPants);
  } catch (err) {
    res.status(500).send('Server error');
    console.log(err);
  }
});

module.exports = pants;
