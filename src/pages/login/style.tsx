import { variables } from "../../styles/variables";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to top, #12173e 0%, #191f4b 100%);

  img {
    width: 24rem;
    margin: 1.6rem 0;
  }
`;

export const Division = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row !important;
  margin: 1rem 0 !important;

  hr {
    width: 40%;
    height: 0.1rem;
    border: ${variables.colors.textPrimary};
    background: ${variables.colors.textPrimary};
  }

  span {
    width: 10%;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    color: ${variables.colors.textPrimary};
  }
`;

export const Form = styled.form`
  width: 24rem;
  color: ${variables.colors.textPrimary};

  div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  label {
    margin-bottom: 0.8rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    background-color: ${variables.colors.backgroundSecondary};
    color: ${variables.colors.textPrimary};
    outline: none;
    border: none;
    border-radius: 0.4rem;
  }
}
`;

export const ButtonGithub = styled.button`
  width: 100%;
  height: 3.4rem;
  font-size: 1.2rem;
  background-color: ${variables.colors.backgroundSecondary};
  color: ${variables.colors.textSecondary};
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.8rem;
    margin-right: 2rem;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 3.4rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  background-color: ${variables.colors.primary};
  color: ${variables.colors.textSecondary};
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;
