// <h1 className="Panel__HomeText"><a href="link here">Dashboard</a></h1>

import { useState } from "react"
import { Button } from "react-bootstrap"
import { ColorOne } from "../pages/Dashboard/ColorOne"
import { ColorTwo } from "../pages/Dashboard/ColorTwo"

export function SideNav() {

    const [active, setActive] = useState("Color_One")

    return (
    <>
    <div className="Panel">
        <div className="Panel__EmptyPad"></div>
        <div className="Panel__Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <h1 className="Panel__HomeText">Dashboard</h1>
        </div>
        <div>Bugs</div>
        <div>Add Issue</div>
        <div>Calendar</div>
        <div>Settings</div>
        <div><Button onClick={() => setActive("Color_One")}>Color Component Test 1</Button></div>
        <div><Button onClick={() => setActive("Color_Two")}>Color Component Test 2</Button></div>
    </div>
    <div className="Panel__Content">
        {active === "Color_One" && <ColorOne />}
        {active === "Color_Two" && <ColorTwo />}
        <div className="Panel__box"></div>
    </div>
    </>
    )
}