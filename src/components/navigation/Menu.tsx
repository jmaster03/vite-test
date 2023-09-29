import { Link } from "react-router-dom"
import { HeaderTop } from "./HeaderTop"
import { HeaderMiddle } from "./HeaderMiddle"
import { HeaderBottom } from "./HeaderBottom"

export function Menu() {
    return (
        <div>
            <nav className="header header-10 header-intro-clearance">

            <HeaderTop/>
            <HeaderMiddle />
            <HeaderBottom />
        </nav >

        </div >
    )
}