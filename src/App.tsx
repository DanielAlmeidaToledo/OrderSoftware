import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./pages/main";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/rota1",
        element: <div>Rota 1</div>,
      },
      {
        path: "/rota2",
        element: <div>Rota 2</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
