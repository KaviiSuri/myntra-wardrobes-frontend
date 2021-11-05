import { createContext, ReactNode, useState } from "react";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import logging from "../config/logging";
import { AuthService } from "../services/auth";
import axios from "axios";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

interface IAuthContextProps {
  loginPath: string;
  children: ReactNode;
  authenticatedPath: string;
}

const AuthProvider: React.FunctionComponent<IAuthContextProps> = ({
  loginPath = "/",
  children,
  authenticatedPath = "/",
}) => {
  const [currFirebaseUser, setCurrFirebaseUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unsub = AuthService.onAuthStateChanged((user: User) => {
      setCurrFirebaseUser(user);
      setLoading(false);
      axios.interceptors.request.use(async (config) => {
        if (currFirebaseUser)
          config.headers = {
            ...config.headers,
            "firebase-auth-token": await currFirebaseUser.getIdToken(),
          };
        return config;
      });

      if (location.pathname === "/") history.push(authenticatedPath);
    });

    return unsub;
  }, []);

  const signIn = async () => {
    try {
      setLoading(true);
      const user = await AuthService.signInWithGooglePopup();
      setCurrFirebaseUser(user);
      logging.info(`User Signed In: ${JSON.stringify(user, null, 2)}`, "Auth");
    } catch (error) {
      logging.error(error, "Auth");
    }
  };

  const signOut = async () => {
    try {
      await AuthService.logout();
      history.push(loginPath);
    } catch (error) {
      logging.error(error, "Auth");
    }
  };

  const isAuthenticated = () => currFirebaseUser !== undefined;
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
