import AddToCartIcon from "../../assets/icons/add_cart.svg";

const ListItem = ({data}) => {
    // console.log(data);
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>${data.discountedPrice}</span>
                    <small>
                        <strike>${data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="cart Icon"></img>
            </button>
        </div>
    )
}

export default ListItem;