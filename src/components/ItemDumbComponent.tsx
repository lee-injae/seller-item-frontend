import React from "react"
import Item from "../models/Item"

type Props = {items:Item[]}

const ItemDumbComponent:React.FC<Props> = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>used year</th>
                    <th>produced year</th>
                    <th>Like New</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map( (item:Item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.itemName}</td>
                            <td>{item.description}</td>
                            <td>{item.yearUsed}</td>
                            <td>{item.yearProduced}</td>
                            <td>{item.isLikeNew}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ItemDumbComponent