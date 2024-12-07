import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Vortex } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation()

  if (loading) {
    return <div className="w-full min-h-28 flex items-center justify-center">
      <Vortex
        visible={true}
        height="180"
        width="180"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={pathname} to={"/SignIn"}></Navigate>;
};

export default PrivateRoute;
