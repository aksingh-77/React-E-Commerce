import ListItem from "../ListItems/ListItem";

const items = [
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
    }
]

const Products = ({data}) => {
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]} />
                <ListItem data={items[1]} />
            </div>
        </div>
    )
}

export default Products;