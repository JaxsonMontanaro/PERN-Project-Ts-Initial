// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONTROLLERS -- (do we need 3 controllers? or just one for the entire shop? we can refactor if needed. EJ)
const pantsController = require('./controllers/pants_controller');
app.use('/api/pants', pantsController);

const shirtsController = require('./controllers/shirts_controller');
app.use('/api/shirts', shirtsController);

const shoesController = require('./controllers/shoes');
app.use('/api/shoes', shoesController);

// LISTEN
app.listen(4005, () => {
  console.log('Server is running on port 4005');
});
