import React from "react"
import Item from "../models/Item"
import ItemDumbComponent from "./ItemDumbComponent"
import Seller from "../models/Seller"
import { addItem, getAllItems } from "../remote/ItemAPI"

type Props = {seller:Seller}

const ItemSmartComponent:React.FC<Props> = (props) => {

    const [items, setItems] = React.useState<Item[]>([])
    const [id, setId] = React.useState<number>(0)
    const [itemName, setItemName] = React.useState<string>("")
    const [description, setDescription] = React.useState<string>("")
    const [yearUsed, setYearUsed] = React.useState<number>(0)
    const [yearProduced, setYearProduced] = React.useState<number>(0)
    const [likeNew, setLikeNew] = React.useState<boolean>(false)

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
                        setDescription(e.target.value)
                }}/>
                <input 
                    placeholder="used year"
                    type="number" onChange={ (e) => {
                        setYearUsed(Number.parseInt(e.target.value))
                }}/>
                <input 
                    placeholder="year produced"
                    type="number" onChange={ (e) => {
                        setYearProduced(Number.parseInt(e.target.value))
                }}/>
                <input 
                    placeholder="Like New"
                    type="checkbox" onChange={ (e) => {
                        setLikeNew(e.target.checked)
                }}/>
            </form>
            <button onClick = { async() => {
                const result:number = await addItem (
                    new Item(id, 
                        itemName, 
                        description, 
                        yearUsed, 
                        yearProduced, 
                        likeNew )
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