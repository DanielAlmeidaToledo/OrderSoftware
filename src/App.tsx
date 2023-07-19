import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";

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
  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
