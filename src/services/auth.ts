import axios from "axios";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import config from "../config/config";
import logging from "../config/logging";
import { firebaseApp } from "./firebase";
import WardrobeService from "./wardrobe";

export class AuthService {
  private static _auth = getAuth(firebaseApp);
  private static _googleProvider = new GoogleAuthProvider();

  static async signInWithGooglePopup() {
    try {
      const result = await signInWithPopup(this._auth, this._googleProvider);
      const user = result.user;
      return user;
    } catch (error) {
      logging.error(error, "Auth");
    }
  }

  static async logout() {
    await this._auth.signOut();
  }

  static onAuthStateChanged(cb: any) {
    return this._auth.onAuthStateChanged(cb);
  }

  static async signInWithBackend(firebaseUser: User) {
    return await WardrobeService.readOrCreateMine(
      {
        name: firebaseUser.displayName,
      },
      await firebaseUser.getIdToken()
    );
  }
}
