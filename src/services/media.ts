import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  list,
  listAll,
} from "firebase/storage";
import { IWardrobe } from "../interfaces/IModels";
import { firebaseApp } from "./firebase";

class MediaService {
  static _storage = getStorage(firebaseApp);

  static async storeDp(wardrobe: IWardrobe, file: File): Promise<string> {
    // create ref
    const dpRef = ref(
      this._storage,
      `dp/${wardrobe.firebase_id}/profile.${this.getExtension(file.name)}`
    );

    await uploadBytes(dpRef, file);
    // download url
    return await getDownloadURL(dpRef);
  }

  static async getDp(wardrobe: IWardrobe): Promise<string | null> {
    const dpRef = ref(this._storage, `dp/${wardrobe.firebase_id}`);
    const res = await listAll(dpRef);
    if (res.items.length === 0) return null;
    return getDownloadURL(dpRef);
  }

  static async storeMedia(file: File) {
    const imgRef = ref(this._storage, `images/${this.getFileName(file.name)}`);
    await uploadBytes(imgRef, file);
    return await getDownloadURL(imgRef);
  }

  static getFileName(filePath: string): string {
    return filePath.substr(filePath.lastIndexOf("\\") + 1).split(".")[0];
  }

  static getExtension(filePath: string) {
    const filename = this.getFileName(filePath);
    return filename.split(".")[1];
  }
}

export default MediaService;
