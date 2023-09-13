import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useContext } from "react";
import { AuthContext, ContextProps } from "./contexts/auth";
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
  const { userInfo, setUserInfo } = useContext<ContextProps>(AuthContext);

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Usuário: ", user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
      });
    });
  }, []);

  if (isUserLoggedIn) {
    console.log("Usuário logado");
    if (location.pathname === "/login") {
      console.log(
        "Usuário logado e está na página de login. Redirecionado para home /"
      );
      // history.pushState({}, "", "/");
    } else {
      console.log("Usuário logado e não está na página de login");
    }
  } else {
    console.log("Usuário não logado");
    if (location.pathname === "/") {
      console.log(
        "Usuário não logado e está na página home. Redirecionado para login /login"
      );
      // history.pushState({}, "", "/login");
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
