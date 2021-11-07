import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { IModel, IOutfit } from "../interfaces/IModels";

class OutfitService {
  static readonly namespace = "OutfitService";

  static async getAll(): Promise<[IOutfit] | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.OUTFIT}/`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async getById(id: string): Promise<IOutfit | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.OUTFIT}/${id}`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async create(outfit: IOutfit): Promise<IOutfit | undefined> {
    try {
      const res = await axios.post(`${config.baseURL.OUTFIT}`, outfit);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async update(
    outfit: Partial<IOutfit> & IModel
  ): Promise<IOutfit | undefined> {
    try {
      const res = await axios.patch(
        `${config.baseURL.OUTFIT}/${outfit._id}`,
        outfit
      );
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }
}

export default OutfitService;
