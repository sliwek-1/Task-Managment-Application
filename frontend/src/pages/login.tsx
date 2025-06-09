import React from "react";
import Header from "../components/header";
import LoginForm from "../components/loginForm";


export default function Login() {
    return <>
        <main>
            <Header/>
            <div style={{width: "100vw", height: "90vh"}} className="d-flex justify-content-center align-items-center align-items-center">
                <LoginForm />
            </div>
        </main>
    </>
}