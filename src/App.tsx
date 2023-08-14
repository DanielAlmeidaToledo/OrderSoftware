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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Usuário: ", user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
      });
    });
  }, []);

  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
