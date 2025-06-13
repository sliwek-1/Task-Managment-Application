import React, {useState, useEffect} from "react";
import {Tab, Tabs} from "react-bootstrap";
import { Chat } from "./main-tabs/chat";
import { Users } from "./main-tabs/users";
import { Tasks } from "./main-tabs/tasks";
import "../../css/dashboard.css";

export default function Main() {

    const [tab, setTab] = useState<string>('users');

    return (
        <>
            <main className="d-flex flex-column justify-content-center align-items-center m-5" style={{width: "93vw"}}>
                <div style={{width: "90vw", height: "85vh"}}>
                        <Tabs
                        defaultActiveKey="chat"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        activeKey={tab}
                        onSelect={(k) => {
                            if(k !== null) setTab(k)
                        }}
                        >
                            <Tab className="tab" eventKey="users" title="users">
                                <Users />
                            </Tab>
                            <Tab className="tab" eventKey="chat" title="chat">
                                <Chat />
                            </Tab>
                            <Tab className="tab" eventKey="tasks" title="tasks">
                                <Tasks />
                            </Tab>
                        </Tabs>
                </div>
            </main>
        </>
    )
}