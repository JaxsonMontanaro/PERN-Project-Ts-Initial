const products = require('express').Router();
const db = require('../models');
const { Products } = db;

// GET All shop items
products.get('/', async (req, res) => {
  try {
    const foundProducts = await Products.findAll();
    res.status(200).json(foundProducts);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
    console.log(err);
  }
});

// PATCH Update a shop item
products.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity_in_stock, quantity_sold } = req.body;

  try {
    const updatedProduct = await Products.update(
      { quantity_in_stock, quantity_sold },
      { where: { item_id: id } }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
    console.log(err);
  }
});

module.exports = products;