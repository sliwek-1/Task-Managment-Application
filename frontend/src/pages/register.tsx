import React from "react";
import Header from "../components/header";
import RegisterForm from "../components/registerForm";

export default function Register() {
    return <>
        <main>
            <Header />
            <div style={{width: "100vw", height: "90vh"}} className="d-flex justify-content-center align-items-center align-items-center">
                <RegisterForm />
            </div>            
        </main>
    </>
}