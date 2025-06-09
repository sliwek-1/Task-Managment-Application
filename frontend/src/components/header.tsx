import React from "react";
import { Button } from "react-bootstrap"

export default function Header() {
    return <>
        <header className="d-flex justify-content-between p-3 align-items-center" style={{height: "10vh"}}>
            <h2>Task Manager Application</h2>

            <div className="d-flex justify-content-around" style={{width: "10vw"}}>
                <Button variant="primary" href="/login">Login</Button>
                <Button variant="primary" href="/register">Register</Button>
            </div>
        </header>
    </>
}