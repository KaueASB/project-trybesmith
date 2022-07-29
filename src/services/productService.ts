import productModel from '../models/productModel';

import { IProducts } from '../interfaces/interface';

const productService = {
  async create(prod: IProducts) {
    const product = await productModel.create(prod);
    return product;
  },

  async getAll(): Promise<IProducts[]> {
    const product = await productModel.getAll();
    return product;
  },
};

export default productService;