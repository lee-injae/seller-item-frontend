import React from "react"

import { Link } from "react-router-dom"

const NavBar:React.FC<unknown> = (props) => {
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/item"}>Items</Link>
            {/* <Link to={"/seller"}>Sellers</Link> */}
        </nav>
    )
}

export default NavBar