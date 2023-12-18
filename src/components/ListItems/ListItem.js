import AddToCartIcon from "../../assets/icons/add_cart.svg";
import { useState } from "react";
const ListItem = ({data, updateItemTitle}) => {
    const [counter, setCounter] = useState(0);

    const increasedCounterByOne = () => {
        setCounter(counter +1);
    }

    const decreasedCounterByOne = () => {
        if(counter === 0){
            return;
        }
        setCounter(counter-1);
    }    
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
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
            {/* by using this arrow method for below method call we made sure that the method is not executed but only the reference is provided */}
            <button onClick={() => updateItemTitle(data.id)}>Update title</button>
            {(
                counter < 1 ? 
                <button className={"cart-add"} onClick={increasedCounterByOne}>
                    <span>Add to Cart</span>
                    <img src={AddToCartIcon} alt="cart Icon"></img>
                </button> 
                : 
                <div className={"cart-addon"}>
                    <button onClick={decreasedCounterByOne}><span>-</span></button>
                    <span className={"counter"}>{counter}</span>
                    <button onClick={increasedCounterByOne}><span>+</span></button>
                </div> 
            )}
            
            
        </div>
    )
}

export default ListItem;