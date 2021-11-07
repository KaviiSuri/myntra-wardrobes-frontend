import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { IProduct } from "../interfaces/IModels";

class ProductService {
  private static readonly namespace = "ProductService";

  static async getAll(): Promise<[IProduct] | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.PRODUCT}/`);
      return res.data;
    } catch (error) {
      logging.error(error, ProductService.namespace);
    }
  }

  static async getById(id: string): Promise<IProduct | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.PRODUCT}/${id}`);
      return res.data;
    } catch (error) {
      logging.error(error, ProductService.namespace);
    }
  }
}

export default ProductService;
