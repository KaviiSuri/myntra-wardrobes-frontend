import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logging from "../config/logging";
import { firebaseApp } from "./firebase";

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
}
