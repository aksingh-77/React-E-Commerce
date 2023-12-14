import AddToCartIcon from "../assets/icons/add_cart.svg";

const ListItem = () => {
    return (
        <div>
            <img src="/assets/placeholder.png" alt="Some Title"/>
            <div>
                <div>
                    <span>$340</span>
                    <small>
                        <strike>$450</strike>
                    </small>
                </div>
                <div>
                    <h3>Title of the item</h3>
                </div>
            </div>
            <button>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="cart Icon"></img>
            </button>
        </div>
    )
}

export default ListItem;