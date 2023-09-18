import { AppBar, Image, User, UserButton } from "./style";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <AppBar>
      <Image src={Logo} alt="Logo" />
      <User>
        <p>Olá, Daniel</p>
        <UserButton>
          <span className="material-symbols-outlined">account_circle</span>
        </UserButton>
      </User>
    </AppBar>
  );
};
