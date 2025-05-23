const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');
const PriceHistory = require('./PriceHistory')
const OldPrices = require('./OldPrices')

const Product = sequelize.define('Product', {
  alcoholPercentage: { type: DataTypes.FLOAT, allowNull: true },
  apk: { type: DataTypes.FLOAT, allowNull: true },
  assortment: { type: DataTypes.STRING, allowNull: true },
  assortmentText: { type: DataTypes.STRING, allowNull: true },
  bottleText: { type: DataTypes.STRING, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  categoryLevel1: { type: DataTypes.STRING, allowNull: true },
  categoryLevel2: { type: DataTypes.STRING, allowNull: true },
  categoryLevel3: { type: DataTypes.STRING, allowNull: true },
  categoryLevel4: { type: DataTypes.STRING, allowNull: true },
  color: { type: DataTypes.STRING, allowNull: true },
  country: { type: DataTypes.STRING, allowNull: true },
  customCategoryTitle: { type: DataTypes.STRING, allowNull: true },
  dishPoints: { type: DataTypes.INTEGER, allowNull: true },
  ethicalLabel: { type: DataTypes.STRING, allowNull: true },
  grapes: { type: DataTypes.JSON, allowNull: true },
  imageModules: { type: DataTypes.JSON, allowNull: true },
  images: { type: DataTypes.JSON, allowNull: true },
  isBsAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isClimateSmartPackaging: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isCompletelyOutOfStock: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isDiscontinued: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isEthical: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isFsAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isFsTsAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isKosher: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isManufacturingCountry: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isNews: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isOrganic: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isPaAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isRecommendedByTasteProfile: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isRegionalRestricted: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isSupplierTemporaryNotAvailable: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isSustainableChoice: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTemporaryOutOfStock: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTsAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTsLsAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTseAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTssAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTstAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isTsvAssortment: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  isWebLaunch: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  originLevel1: { type: DataTypes.STRING, allowNull: true },
  originLevel2: { type: DataTypes.STRING, allowNull: true },
  otherSelections: { type: DataTypes.STRING, allowNull: true },
  packagingLevel1: { type: DataTypes.STRING, allowNull: true },
  price: { type: DataTypes.FLOAT, allowNull: true },
  producerName: { type: DataTypes.STRING, allowNull: true },
  productId: { type: DataTypes.STRING, allowNull: true, primaryKey: true },
  productLaunchDate: { type: DataTypes.DATE, allowNull: true },
  productNameBold: { type: DataTypes.STRING, allowNull: true },
  productNameThin: { type: DataTypes.STRING, allowNull: true },
  productNumber: { type: DataTypes.STRING, allowNull: true },
  productNumberShort: { type: DataTypes.STRING, allowNull: true },
  recycleFee: { type: DataTypes.FLOAT, allowNull: true },
  restrictedParcelQuantity: { type: DataTypes.INTEGER, allowNull: true },
  sellStartTime: { type: DataTypes.TIME, allowNull: true },
  sugarContent: { type: DataTypes.FLOAT, allowNull: true },
  sugarContentGramPer100ml: { type: DataTypes.FLOAT, allowNull: true },
  supplierName: { type: DataTypes.STRING, allowNull: true },
  taste: { type: DataTypes.TEXT, allowNull: true },
  tasteClocks: { type: DataTypes.JSON, allowNull: true },
  tasteSymbols: { type: DataTypes.JSON, allowNull: true },
  usage: { type: DataTypes.TEXT, allowNull: true },
  vintage: { type: DataTypes.STRING, allowNull: true },
  volume: { type: DataTypes.FLOAT, allowNull: true },
  volumeText: { type: DataTypes.STRING, allowNull: true },
  enabled: { type: DataTypes.BOOLEAN, allowNull: true },
  lastSeen: { type: DataTypes.DATE, allowNull: true }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

Product.hasMany(PriceHistory, {
  foreignKey: 'productId',
  sourceKey: 'productId',
});

PriceHistory.belongsTo(Product, {
  foreignKey: 'productId',
  targetKey: 'productId',
});

PriceHistory.hasMany(OldPrices, {
  foreignKey: 'priceHistoryId',
});

OldPrices.belongsTo(PriceHistory, {
  foreignKey: 'priceHistoryId',
});

module.exports = Product;
