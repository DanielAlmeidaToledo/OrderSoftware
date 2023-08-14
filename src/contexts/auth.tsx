import { useState, useEffect, createContext, useCallback } from "react";
import firebase from "../services/firebase";

export const AuthContext = createContext<ContextProps>({} as ContextProps);

type UserProps = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  providerData: any;
  providerId: string;
  refreshToken: string;
  tenantId: string | null;
};

type UserInfoProps = {
  isUserLoggedIn: boolean;
  user: UserProps | null;
};

export interface ContextProps {
  login: () => void;
  logout: () => void;
  userInfo: UserInfoProps;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoProps>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

function Auth({ children }: AuthProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    isUserLoggedIn: false,
    user: null,
  });

  // Realiza o login com o github
  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }, []);

  // Realiza o logout
  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Deslogado");
        setUserInfo({
          isUserLoggedIn: false,
          user: null,
        });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
