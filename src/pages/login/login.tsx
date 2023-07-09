import {
  LoginWrapper,
  Form,
  ButtonGithub,
  ButtonSubmit,
  Division,
} from "./style";

import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import GithubLogo from "../../assets/github.svg";
import Logo from "../../assets/logo.svg";

const firebaseConfig = {
  apiKey: "AIzaSyAR-IYNMHQWp3JpxC-fzYrtARhcKNqqCIM",
  authDomain: "software-pizzaria.firebaseapp.com",
  projectId: "software-pizzaria",
  storageBucket: "software-pizzaria.appspot.com",
  messagingSenderId: "374054670729",
  appId: "1:374054670729:web:7224a7cda50b6eebbf5158",
  measurementId: "G-4JLNF58CGE",
};

firebase.initializeApp(firebaseConfig);

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

export default function Login() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Usuário: ", user);
      setIsUserLoggedIn(!!user);
      setUser(user);
    });
  }, []);

  // Realiza o login com o github
  const handleLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  // Realiza o logout
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Deslogado");
        setIsUserLoggedIn(false);
        setUser(null);
      });
  };

  return (
    <LoginWrapper>
      <img src={Logo} alt="Logo" />
      <Form>
        <ButtonGithub type="button" onAbort={handleLogin}>
          <img src={GithubLogo} alt="Github Logo" />
          Entrar com Github
        </ButtonGithub>
        <Division>
          <hr />
          <span>ou</span>
          <hr />
        </Division>
        <div>
          <label htmlFor="username">Email</label>
          <input type="email" placeholder="Entre com seu email" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Entre com sua senha" />
        </div>
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
      </Form>
    </LoginWrapper>
  );
}
