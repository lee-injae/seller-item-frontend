import React from "react"
import Seller from "../models/Seller"

type Props = {sellers:Seller[]}

const SellerDumbComponent:React.FC<Props> = (props) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>username</th>
                    <th>city</th>
                    <th>year of birth</th>
                </tr>
            </thead>
            <tbody>
                {props.sellers.map( (seller:Seller) => {
                    return(
                        <tr>
                            <td>{seller.id}</td>
                            <td>{seller.userName}</td>
                            <td>{seller.city}</td>
                            <td>{seller.birthyear}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SellerDumbComponent