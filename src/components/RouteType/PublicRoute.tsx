import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface IPublicRouteProps {
  children: React.ReactNode;
  redirectPath: string;
  restricted: boolean;
}

const PublicRoute: FC<IPublicRouteProps> = ({
  children,
  redirectPath = "/",
  restricted = false,
}) => {
  return <div></div>;
};

export default PublicRoute;
