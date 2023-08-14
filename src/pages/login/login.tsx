import {
  LoginWrapper,
  Form,
  ButtonGithub,
  ButtonSubmit,
  Division,
} from "./style";

import { useContext } from "react";
import { AuthContext, ContextProps } from "../../contexts/auth";

import GithubLogo from "../../assets/github.svg";
import Logo from "../../assets/logo.svg";

export default function Login() {
  const { login } = useContext<ContextProps>(AuthContext);

  return (
    <LoginWrapper>
      <img src={Logo} alt="Logo" />
      <Form>
        <ButtonGithub type="button" onClick={login}>
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
