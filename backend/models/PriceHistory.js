import { define } from '../config/db';

const PriceHistory = define('PriceHistory', {
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  oldPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  newPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  changePercentage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

export default PriceHistory;
