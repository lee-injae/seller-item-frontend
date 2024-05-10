import React from "react"
import { Route, Routes } from "react-router-dom"

import ItemSmartComponent from "../components/ItemSmartComponent"

import Seller from "../models/Seller"

type Props = {seller:Seller}

const AppRoutes:React.FC<Props> = (props) => {
    console.log("isthis oshi ?", props.seller)
    return(
        <Routes>
            <Route 
                element={
                    <h3>Welcome to blit sellers</h3>
                } 
                path="/"
            />
            <Route 
                element={
                    <ItemSmartComponent seller={props.seller} />
                } 
                path="/item"
            />
        </Routes>
    )
}

export default AppRoutes