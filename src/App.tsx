import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { lazy, Suspense, useState, useContext, useEffect } from "react";
import { AuthContext, ContextProps } from "./contexts/auth";
import LinearProgress from "@mui/material/LinearProgress";
import firebase from "./services/firebase";

const MainPage = lazy(() => import("./pages/main/main"));
const Login = lazy(() => import("./pages/login/login"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

const App = () => {
  const { userInfo, setUserInfo, logout } =
    useContext<ContextProps>(AuthContext);
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);
  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Usuário: ", user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
      });
      setDidCheckUserIn(true);
    });
  }, []);

  if (!didCheckUserIn) {
    return <h1>Carregando...</h1>;
  }

  if (!isUserLoggedIn && location.pathname !== "/login") {
    history.pushState({}, "", "/login");
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
