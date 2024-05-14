import Seller from "../models/Seller"
import Item from "../models/Item"
import SellerItemClient from "./SellerItemClient"

export const getAllItems = async (seller:Seller):Promise<Item[]> => {
    const res = await SellerItemClient
    .get<Item[]>("item/all", {
        //basic auth
        auth:{username:seller.username || "", 
            password:seller.password || ""}
    })
    if (res.status === 200) {
        return res.data
    } else {
        console.log(res) 
        return []
    }
}

export const addItem = async (item:Item, seller:Seller):Promise<number> => {
    const res = await SellerItemClient
    .post("/item", item, {
        auth:{username: seller.username || '',
            password:seller.password || ""
        }
    })
    if (res.status != 201) {
        console.log(res)
    }
    return res.status
}

export const deleteItem = async (item:Item, seller:Seller):Promise