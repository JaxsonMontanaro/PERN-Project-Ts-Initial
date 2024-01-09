'use strict';
import { DataTypes, Model, Optional } from 'sequelize';
import { Sequelize } from 'sequelize/types';

interface ProductsAttributes {
  item_id: number;
  item_name: string;
  quantity_in_stock: number;
  quantity_sold: number;
  price: number;
}

interface ProductsCreationAttributes extends Optional<ProductsAttributes, 'item_id'> {}

class Products extends Model<ProductsAttributes, ProductsCreationAttributes> implements ProductsAttributes {
  public item_id!: number;
  public item_name!: string;
  public quantity_in_stock!: number;
  public quantity_sold!: number;
  public price!: number;

  static associate(models: any) {
    // define association here
  }
}

Products.init({
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity_in_stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity_sold: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize: {} as Sequelize, // Add your sequelize instance here
  modelName: 'Products',
  tableName: 'Products',
  timestamps: false
});

export default Products;