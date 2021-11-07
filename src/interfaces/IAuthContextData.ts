import { User } from "firebase/auth";
import { IWardrobe } from "./IModels";

export interface IAuthContextData {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: () => boolean;
  currFirebaseUser: User | undefined;
  currWardrobe: IWardrobe | undefined;
}
