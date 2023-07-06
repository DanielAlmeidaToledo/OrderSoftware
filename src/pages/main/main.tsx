import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main</h1>
      <Outlet />
    </>
  );
}
