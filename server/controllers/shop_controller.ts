import { Router, Request, Response } from 'express';
import { Model } from 'sequelize/types';
const db = require('../models');

const products = Router();
const { Products } = db;

// GET All shop items
products.get('/', async (req: Request, res: Response) => {
  try {
    const foundProducts = await Products.findAll();
    res.status(200).json(foundProducts);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
    console.log(err);
  }
});

// PATCH Update a shop item
products.patch('/:id', async (req: Request, res: Response) => {
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

export default products;