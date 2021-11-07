import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { IModel, IWardrobe } from "../interfaces/IModels";

class WardrobeService {
  static async readOrCreateMine(
    args?: { name: string | null },
    idToken?: string
  ): Promise<IWardrobe | undefined> {
    try {
      const res = await axios.post(`${config.baseURL.WARDROBE}/my`, args, {
        headers: {
          [config.authHeaderKey]: idToken as string,
        },
      });

      const wardrobe = res.data;
      return wardrobe;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  private static readonly namespace = "WardrobeService";

  static async getAll(): Promise<[IWardrobe] | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.WARDROBE}/`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async getById(id: string): Promise<IWardrobe | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.WARDROBE}/${id}`);
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }

  static async updateById(
    wardrobe: Partial<IWardrobe> & IModel
  ): Promise<IWardrobe | undefined> {
    try {
      const res = await axios.patch(
        `${config.baseURL.WARDROBE}/${wardrobe._id}`,
        wardrobe
      );
      return res.data;
    } catch (error) {
      logging.error(error, this.namespace);
    }
  }
}

export default WardrobeService;
