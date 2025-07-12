// wrapper para RouterProvider para poder chamar
// a variável de autenticação em contexto

import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "./LoginPage.jsx";
import App from "../App.jsx";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/app"} />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <App />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default AppRouter;
