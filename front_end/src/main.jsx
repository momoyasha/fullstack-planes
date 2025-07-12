import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// contextos
import { PlanesContextProvider } from "./context/PlanesContext.jsx";
import LoginPage from "./components/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthenticationContextProvider } from "./context/AuthenticationContext.jsx";

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
      <ProtectedRoute isAuthenticated={true}>
        <App />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <PlanesContextProvider>
        <RouterProvider router={router} />
      </PlanesContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>
);
