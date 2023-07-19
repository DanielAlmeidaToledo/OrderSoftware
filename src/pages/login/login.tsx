import {
  LoginWrapper,
  Form,
  ButtonGithub,
  ButtonSubmit,
  Division,
} from "./style";

import { useEffect, useState, useCallback } from "react";
import firebase from "../../services/firebase";

import GithubLogo from "../../assets/github.svg";
import Logo from "../../assets/logo.svg";

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
      setIsUserLoggedIn(!!user);
      setUser(user);
      console.log("Usuário: ", user);
    });
  }, []);

  // Realiza o login com o github
  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }, []);

  // Realiza o logout
  const handleLogout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Deslogado");
        setIsUserLoggedIn(false);
        setUser(null);
      });
  }, []);

  return (
    <LoginWrapper>
      <img src={Logo} alt="Logo" />
      <Form>
        <ButtonGithub type="button" onClick={handleLogin}>
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
