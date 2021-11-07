import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { IOutfit, IProduct } from "../interfaces/IModels";

class ConversionService {
  static readonly namespace = "ConversionService";

  static async registerClick(product: IProduct, outfit: IOutfit) {
    try {
      await axios.post(`${config.baseURL.CONVERSION}/click`, {
        product,
        outfit,
      });
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async regiserBuy(product: IProduct) {
    try {
      await axios.post(`${config.baseURL.CONVERSION}/buy`, {
        product,
      });
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }
}

export default ConversionService;
