import React from "react"
import Item from "../models/Item"
import ItemDumbComponent from "./ItemDumbComponent"
import Seller from "../models/Seller"
import { addItem, getAllItems } from "../remote/ItemAPI"

type Props = {seller:Seller}

const ItemSmartComponent:React.FC<Props> = (props) => {

    const [items, setItems] = React.useState<Item[]>([])
    const [itemName, setItemName] = React.useState<string>("")
    const [description, setDescription] = React.useState<string>("")
    const [yearUsed, setYearUsed] = React.useState<number>(0)
    const [yearProduced, setYearProduced] = React.useState<number>(0)
    const [isLikeNew, setIsLikeNew] = React.useState<boolean>(false)

    return(
        <div>
            <ItemDumbComponent items={items} />
            <button
                onClick = { async () => {
                    let apiItems:Item[] = await getAllItems(props.seller)
                    setItems(apiItems)
            }}> 
            Get items 
            </button>
            <form>
                <input 
                    placeholder="item name"
                    type="text" onChange={ (e) => {
                        setItemName(e.target.value)
                }}/>
                <input 
                    placeholder="description"
                    type="textarea" onChange={ (e) => {
                        setItemName(e.target.value)
                }}/>
                <input 
                    placeholder="used year"
                    type="number" onChange={ (e) => {
                        setItemName(e.target.value)
                }}/>
                <input 
                    placeholder="year produced"
                    type="number" onChange={ (e) => {
                        setItemName(e.target.value)
                }}/>
                <input 
                    placeholder="Like New"
                    type="checkbox" onChange={ (e) => {
                        setItemName(e.target.value)
                }}/>
            </form>
            <button onClick = { async() => {
                const result:number = await addItem (
                    new Item(0, 
                        itemName, 
                        description, 
                        yearUsed, 
                        yearProduced, 
                        isLikeNew )
                , props.seller)

                if (result === 201) {
                    const apiItems:Item[] = await getAllItems(props.seller)
                    setItems(apiItems)
                }
            }}>
            Add item
            </button>
        </div>
    )
}

export default ItemSmartComponent