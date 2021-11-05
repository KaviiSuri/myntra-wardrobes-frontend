import { User } from "firebase/auth";

export interface IAuthContextData {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: () => boolean;
  currFirebaseUser: User | undefined;
}
