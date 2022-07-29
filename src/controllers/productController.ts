import { Request, Response } from 'express';
import productService from '../services/productService';

class ProductController {
  public create = async (req: Request, res: Response) => {
    const productCreated = await productService.create(req.body);
    res.status(201).json(productCreated);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await productService.getAll();
    res.status(200).json(products);
  };
}

export default ProductController;