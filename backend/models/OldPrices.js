import { define } from '../config/db';

const OldPrices = define('OldPrices', {
  newPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  oldPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default OldPrices;
