import React from "react";
import { useAppSelector } from "../hooks/hooks";


export default function Home() {
    const user = useAppSelector((state) => state.login);
    console.log(user)
    return <h1>Home</h1>
}