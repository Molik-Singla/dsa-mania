import { ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import ScreenLoader from "../components/animations/ScreenLoader";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoading, isAuthenticated, isRefetching } = useAuth();

    if (isLoading || isRefetching) return <ScreenLoader />;
    else if (!isAuthenticated && (isLoading === false || isRefetching === false)) return <Navigate to="/login" />;
    else return children;
};

export default ProtectedRoute;
