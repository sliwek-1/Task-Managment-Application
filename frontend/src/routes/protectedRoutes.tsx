import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/auth";
import { useAppSelector } from "../hooks/hooks";

 
export default function ProtectedRoutes() {
    const {loading, error, auth} = useAuth();

    useEffect(() => {
            auth();
    }, [auth])

    if(loading) return <p>Loading...</p>

    if(error) {
        return <Navigate to={"/login"} replace />
    }
 
    return <Outlet />
}