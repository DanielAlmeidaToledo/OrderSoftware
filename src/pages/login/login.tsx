import {
  LoginWrapper,
  Form,
  ButtonGithub,
  ButtonSubmit,
  Division,
} from "./style";

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

export default function Login() {
  const handleClick = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <LoginWrapper>
      <img src={Logo} alt="Logo" />
      <Form>
        <ButtonGithub type="button" onClick={handleClick}>
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
