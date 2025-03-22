import { fn, col } from '../config/db';
import Product, { findAll } from '../models/Product';
import { findAll as _findAll } from '../models/PriceHistory';
import OldPrices, { findAll as __findAll } from '../models/OldPrices';
import { Op } from 'sequelize';

const getApk = async (_req, res) => {
  try {
    const productsApk = await findAll({
      order: [['apk', 'DESC']],
      limit: 50,
    });
    if (productsApk) {
      return res.status(200).json(productsApk)
    } else {
      return res.status(404).json({ message: 'No products found' })
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getDates = async (_req, res) => {
  try {
    const uniqueUpdatedAt = await __findAll({
      attributes: [
        [fn('DATE', col('updatedAt')), 'updatedAt']
      ],
      group: [fn('DATE', col('updatedAt'))],
      raw: true,
    })
    const dates = uniqueUpdatedAt.map(row => row.updatedAt);
    return res.status(200).json(dates)
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const getPriceChangesLower = async (req, res) => {
  try {
    let { sort } = req.query;
    let order = [["newPrice", "ASC"]]
    if (sort === "priceabs") {
      order = [["newPrice", "ASC"]]
    } else if (sort === "percentage") {
      order = [["changePercentage", "ASC"]]
    } else if (sort === "alphabetical") {
      order = [[{ model: Product }, 'productNameBold', "ASC"]]
    } else if (sort === "category") {
      order = [[{ model: Product }, 'categoryLevel2']]
    } else if (sort === "date") {
      order = [[{ model: OldPrices }, "updatedAt", "ASC"]];
    }
    const productsLowered = await _findAll(
      {
        where: {
          changePercentage: {
            [Op.lt]: .9
          },
          oldPrice: {
            [Op.gt]: 90
          }
        },
        include: [
          {
            model: Product,
          },
          {
            model: OldPrices,
            order: [['updatedAt', 'ASC']],
          }
        ],
        order,
      }
    )
    return res.status(200).json(productsLowered)
  } catch (error) {
    console.error(error)
    throw error;
  }
}

const getPriceChangesRaise = async (req, res) => {
  try {
    let { sort } = req.query;
    let order = [["newPrice", "DESC"]]
    if (sort === "priceabs") {
      order = [["newPrice", "DESC"]]
    } else if (sort === "percentage") {
      order = [["changePercentage", "DESC"]]
    } else if (sort === "alphabetical") {
      order = [[{ model: Product }, 'productNameBold', "ASC"]]
    } else if (sort == "category") {
      order = [[{ model: Product }, 'categoryLevel1']]
    }
    const productsLowered = await _findAll(
      {
        where: {
          changePercentage: {
            [Op.gt]: 1.1
          }
        },
        include: [
          {
            model: Product,
          },
          {
            model: OldPrices,
            order: [['updatedAt', 'ASC']],
          }
        ],
        order,
      }
    )
    return res.status(200).json(productsLowered)
  } catch (error) {
    console.error(error)
    throw error;
  }
}

export default {
  getApk,
  getPriceChangesLower,
  getPriceChangesRaise,
  getDates
}
