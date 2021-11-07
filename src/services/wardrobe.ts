import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";
import { IWardrobe } from "../interfaces/IModels";

class WardrobeService {
  static async readOrCreateMine(
    args: { name: string | null },
    idToken: string
  ): Promise<IWardrobe | undefined> {
    try {
      const res = await axios.post(`${config.baseURL.WARDROBE}/my`, args, {
        headers: {
          [config.authHeaderKey]: idToken,
        },
      });

      const wardrobe = res.data;
      return wardrobe;
    } catch (error) {
      logging.error(error, "Wardrobe");
    }
  }

  static async getAll(): Promise<[IWardrobe] | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.WARDROBE}/`);
      return res.data;
    } catch (error) {
      logging.error(error, "Wardrobe");
    }
  }

  static async getById(id: string): Promise<IWardrobe | undefined> {
    try {
      const res = await axios.get(`${config.baseURL.WARDROBE}/${id}`);
      return res.data;
    } catch (error) {
      logging.error(error, "Wardrobe");
    }
  }
}

export default WardrobeService;
