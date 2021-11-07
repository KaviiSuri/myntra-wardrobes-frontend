import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { ICollection, IModel, IOutfit } from "../interfaces/IModels";

class CollectionService {
  static readonly namespace = "CollectionService";

  static async getAll(): Promise<[ICollection] | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.COLLECTION}`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async getById(id: string): Promise<ICollection | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.COLLECTION}/${id}`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async create(
    collection: ICollection
  ): Promise<ICollection | undefined> {
    try {
      const res = await axios.post(`${config.baseURL.COLLECTION}`, collection);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async update(
    collection: Partial<ICollection> & IModel
  ): Promise<ICollection | undefined> {
    try {
      const res = await axios.patch(`${config.baseURL.COLLECTION}`, collection);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }
}

export default CollectionService;
