// DEPENDENCIES
import express, { Application, Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import path from 'path';
import cors from 'cors';

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// CONTROLLERS
const shopController = require("./controllers/shop_controller");
app.use("/api/shop", shopController);

// LISTEN
const PORT: number = 4005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
