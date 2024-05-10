import React from "react"

import Seller from "../models/Seller"
import Item from "../models/Item"
import { getAllItems } from "../remote/ItemAPI"
import AppRoutes from "../routes/AppRoutes"


const LoginComponent:React.FC = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [seller, setSeller] = React.useState(new Seller("", "NONE", ""))
    
    return(
        <div>
            <input type="text" placeholder="username"
            onChange={ (e) => setUsername(e.target.value)} 
            />
            <input type="text" placeholder="password"
            onChange={ (e) => setPassword(e.target.value)} 
            />
            <button onClick={ async () => {
                const inputUser:Seller = new Seller(username, "ADMIN", password)
                const result:Item[] = await getAllItems(inputUser)
                if(result.length) {
                    setSeller(inputUser)
                }
            }}>
            Log in
            </button>
        
            <AppRoutes seller={seller}></AppRoutes>

        </div>
    )
}

export default LoginComponent