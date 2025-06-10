import React from "react";
import { useAppSelector } from "../hooks/hooks";


export default function Home() {
    const user = useAppSelector((state) => state.login);
    return <h1>{user.login}</h1>
}