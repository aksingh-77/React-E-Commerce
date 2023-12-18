import { useState } from "react";
import ListItem from "../ListItems/ListItem";

const Products = ({data}) => {
    const [items, setItems] = useState([
        {
            id:0,
            title:"Title of this item 1",
            price: 450,
            discountedPrice: 340,
            thumnail: "placeholder.png"
        },
        {
            id:1,
            title:"Title of this item 2",
            price: 100,
            discountedPrice: 80,
            thumnail: "placeholder.png"
        },
        {
            id:2,
            title:"Title of this item 3",
            price: 500,
            discountedPrice: 480,
            thumnail: "placeholder.png"
        },
        {
            id:3,
            title:"Title of this item 4",
            price: 560,
            discountedPrice: 500,
            thumnail: "placeholder.png"
        }
    ])

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                {
                    items.map(item=>{
                        // console.log(item);
                        return (<ListItem key={item.id} data={item} />)
                    })
                }
            </div>
        </div>
    )
}

export default Products;