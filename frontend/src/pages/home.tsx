import React from "react";
import { useAppSelector } from "../hooks/hooks";
import Header from "../components/header";

export default function Home() {
    const user = useAppSelector((state) => state.login);
    return (
        <>
            <Header />
        </>
    )
}