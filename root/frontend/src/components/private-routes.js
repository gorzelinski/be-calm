import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = { token: true };
  return auth.token ? <Outlet></Outlet> : <Navigate to="/login/"></Navigate>;
};

export default PrivateRoutes;
