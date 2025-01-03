export type Product = {
  alcoholPercentage?: number;
  apk?: number;
  assortment?: string;
  assortmentText?: string;
  bottleText?: string;
  category?: string;
  categoryLevel1?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  color?: string;
  country?: string;
  customCategoryTitle?: string;
  dishPoints?: number;
  ethicalLabel?: string;
  grapes?: any; // Replace with a more specific type if the JSON structure is known
  imageModules?: any; // Replace with a specific type if known
  images?: any; // Replace with a specific type if known
  isBsAssortment?: boolean;
  isClimateSmartPackaging?: boolean;
  isCompletelyOutOfStock?: boolean;
  isDiscontinued?: boolean;
  isEthical?: boolean;
  isFsAssortment?: boolean;
  isFsTsAssortment?: boolean;
  isKosher?: boolean;
  isManufacturingCountry?: boolean;
  isNews?: boolean;
  isOrganic?: boolean;
  isPaAssortment?: boolean;
  isRecommendedByTasteProfile?: boolean;
  isRegionalRestricted?: boolean;
  isSupplierTemporaryNotAvailable?: boolean;
  isSustainableChoice?: boolean;
  isTemporaryOutOfStock?: boolean;
  isTsAssortment?: boolean;
  isTsLsAssortment?: boolean;
  isTseAssortment?: boolean;
  isTssAssortment?: boolean;
  isTstAssortment?: boolean;
  isTsvAssortment?: boolean;
  isWebLaunch?: boolean;
  originLevel1?: string;
  originLevel2?: string;
  otherSelections?: string;
  packagingLevel1?: string;
  price?: number;
  producerName?: string;
  productId?: string; // If primary key, make required
  productLaunchDate?: string; // Use `Date` if working with parsed Date objects
  productNameBold?: string;
  productNameThin?: string;
  productNumber?: string;
  productNumberShort?: string;
  recycleFee?: number;
  restrictedParcelQuantity?: number;
  sellStartTime?: string; // Use `Date` or `Time` object if parsed
  sugarContent?: number;
  sugarContentGramPer100ml?: number;
  supplierName?: string;
  taste?: string;
  tasteClocks?: any; // Replace with specific type if JSON structure is known
  tasteSymbols?: any; // Replace with specific type if JSON structure is known
  usage?: string;
  vintage?: string;
  volume?: number;
  volumeText?: string;
  createdAt?: string; // Sequelize timestamps
  updatedAt?: string; // Sequelize timestamps
};
