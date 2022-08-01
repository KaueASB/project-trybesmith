import Joi from 'joi';
import productModel from '../models/productModel';

import { IProducts } from '../interfaces/interface';

const productService = {
  async validateFields(body: IProducts) {
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    
    console.log('schema: ', schema);
    await schema.validateAsync(body);
  },

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