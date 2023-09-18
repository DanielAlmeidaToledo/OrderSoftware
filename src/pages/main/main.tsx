import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Main } from "./style";

export default function MainPage() {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}
