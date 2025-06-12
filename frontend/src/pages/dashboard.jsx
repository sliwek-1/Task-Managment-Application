import React from "react";
import { useAppSelector } from "../hooks/hooks";
import Header from "../components/header";
import Sidebar from "../components/Group/sidebar";
import Main from "../components/Group/main";

export default function Dashboard() {
    const user = useAppSelector((state) => state.login);
    return (
        <>
            <Header />
            <div className="d-flex align-items-center justify-content-between">
                <Sidebar />
                <Main />
            </div>
        </>
    )
}