import { findOne, create } from '../models/PriceHistory';
import { findOne as _findOne, bulkCreate } from '../models/Product';
import fetchProductData from './fetchProductData';
import { create as _create } from '../models/OldPrices';

const addData = async (element) => {
  const dbProduct = await _findOne({ where: { productId: element.productId } });
  if (dbProduct) {
    const percentage = element.price / dbProduct.price;
    if (dbProduct.price !== element.price) {
      const history = await findOne({ where: { productId: element.productId } });

      if (history) {
        await _create({
          oldPrice: history.newPrice,
          newPrice: element.price,
          updatedAt: new Date(),
          priceHistoryId: history.id,
        });
        history.oldPrice = history.newPrice;
        history.newPrice = element.price;
        history.changePercentage = percentage;
        await history.save();
      } else {
        const newHistory = await create({
          productId: element.productId,
          oldPrice: dbProduct.price,
          newPrice: element.price,
          changePercentage: percentage,
        });
        await _create({
          oldPrice: dbProduct.price,
          newPrice: element.price,
          updatedAt: new Date(),
          priceHistoryId: newHistory.id,
        });
      }
      await dbProduct.update({
        ...element, lastSeen: new Date(), enabled: true
      });
    } else {
      await dbProduct.update({ lastSeen: new Date() })
    }
    return null;
  } else {
    const apk = (element.volume * (element.alcoholPercentage / 100)) / element.price;
    element.apk = apk;
    element.lastSeen = new Date();
    element.enabled = true;
    return element;
  }
}

const updateData = async (args) => {
  let executablePath = './systembolagetapi/sysapi'
  let parsedData = await fetchProductData(executablePath, args);
  let newElementsArray = [];
  for (const element of parsedData) {
    let x = await addData(element);
    if (x) {
      newElementsArray.push(x)
    }
  }
  bulkCreate(newElementsArray, {
    ignoreDuplicates: true,
  });
}

export default updateData;
