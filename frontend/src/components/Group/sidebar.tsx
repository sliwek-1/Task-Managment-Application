import React from "react";
import { Button } from "react-bootstrap";
import { TooltipWrapper } from "./tooltip-wrapper";

export default function Sidebar() {
    return (
        <>
            <aside className="d-flex flex-column justify-content-center align-items-start p-3" style={{width: "10vw"}}>
                <div className="d-flex flex-column align-items-center justify-content-start rounded p-3 border" style={{width: "4vw", height: "85vh"}}>
                    <TooltipWrapper message="Grupa1">
                        <div className="f-flex mb-3">
                            <Button className="rounded-circle">G</Button>
                        </div>
                    </TooltipWrapper>

                    <TooltipWrapper message="Grupa2">
                        <div className="f-flex mb-3">
                            <Button className="rounded-circle">D</Button>
                        </div>
                    </TooltipWrapper>

                    <TooltipWrapper message="Grupa3">
                        <div className="f-flex mb-3">
                            <Button className="rounded-circle">C</Button>
                        </div>
                    </TooltipWrapper>

                    <TooltipWrapper message="alpha team">
                        <div className="f-flex mb-3">
                            <Button className="rounded-circle">H</Button>
                        </div>
                    </TooltipWrapper>

                    <TooltipWrapper message="Klasa 3">
                        <div className="f-flex mb-3">
                            <Button className="rounded-circle">A</Button>
                        </div>
                    </TooltipWrapper>

                    <TooltipWrapper message="Dodaj Grupe">
                        <div className="f-flex mb-3 mt-auto">
                            <Button variant="success" className="rounded-circle">+</Button>
                        </div>
                    </TooltipWrapper>
                </div>
            </aside> 
        </>
    )
}