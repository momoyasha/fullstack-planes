// componentes que esse cara envelopa devem redirecionar
// para a página de login caso a autenticação não esteja ok

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
