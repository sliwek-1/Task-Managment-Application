import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useAppSelector } from "../hooks/hooks";

export default function Header() {
    const user = useAppSelector((state) => state.login);

    return <>
        <header className="d-flex justify-content-between p-3 align-items-center" style={{height: "7vh"}}>
            <h2>Task Manager Application</h2>

            {user ?      
                <div className="d-flex justify-content-around" style={{width: "10vw"}}>
                    <Dropdown className="dropdown-bg">
                        <Dropdown.Toggle id="dropdown-basic">
                            {user.login}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger dropdown-item">
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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