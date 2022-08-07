import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
  children: React.ReactNode;
  redirectPath: string;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  children,
  redirectPath = "/",
}) => {
  return <div></div>;
};

export default PrivateRoute;
