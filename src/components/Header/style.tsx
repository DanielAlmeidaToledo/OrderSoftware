import { variables } from "../../styles/variables";
import styled from "styled-components";

export const AppBar = styled.div`
  height: 10rem;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
  color: ${variables.colors.textPrimary};
  background-color: ${variables.colors.backgroundSecondary};
`;

export const Image = styled.img`
  height: 90%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${variables.colors.textPrimary};

  .material-symbols-outlined {
    font-size: 2rem;
  }
`;
