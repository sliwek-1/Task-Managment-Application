import React from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../hooks/hooks";

export default function Header() {
    const user = useAppSelector((state) => state.login);

    return <>
        <header className="d-flex justify-content-between p-3 align-items-center" style={{height: "7vh"}}>
            <h2>Task Manager Application</h2>

            {user ?      
                <div className="d-flex justify-content-around" style={{width: "10vw"}}>
                    <div className="d-flex align-items-center">{user.login}</div>
                    <Button variant="danger" href="#">Logout</Button>
                </div>
                :
                <div className="d-flex justify-content-around" style={{width: "10vw"}}>
                    <Button variant="primary" href="/login">Login</Button>
                    <Button variant="primary" href="/register">Register</Button>
                </div>
            }
        </header>
    </>
}