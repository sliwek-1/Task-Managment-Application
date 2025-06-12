import { OverlayTrigger, Tooltip } from "react-bootstrap";

export function TooltipWrapper({children, message, placement = 'right'}: any) {
    return (
        <OverlayTrigger 
            placement={placement}
            overlay={<Tooltip>{message}</Tooltip>}
        >
            {children}
        </OverlayTrigger>
    )
}