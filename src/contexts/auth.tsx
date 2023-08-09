import { createContext, useCallback } from "react";
import firebase from "firebase/compat/app";

export const AuthContext = createContext<ContextProps>({} as ContextProps);

interface ContextProps {
  login: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

function Auth({ children }: AuthProviderProps) {
  // Realiza o login com o github
  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }, []);

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}

export default Auth;
