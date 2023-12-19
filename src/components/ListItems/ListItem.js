import AddToCartIcon from "../../assets/icons/add_cart.svg";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
const ListItem = ({data, onAdd, onRemove}) => {
    const [counter, setCounter] = useState(0);
    let [showModal, setShowModal] = useState(false);

    const increasedCounterByOne = event => {
        // event.stopPropagation method is used to stop the propagaton of showing modal i.e it won't bubble up till the root element
        event.stopPropagation()
        onAdd(data.id)
        setCounter(counter +1);
    }

    const decreasedCounterByOne = event => {
        event.stopPropagation()
        if(counter === 0){
            return;
        }
        if(counter == 1){
            onRemove(data.id)
        }
        setCounter(counter-1);
    } 
    
    const handleModal = () => {
        setShowModal(showModal = !showModal);
    }
    return (
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
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
                {/* <button onClick={() => updateItemTitle(data.id)}>Update title</button> */}
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
            { showModal && 
            <Modal onClose={handleModal}>
                <div className={"item-card__modal"}>
                    <div className="img-wrap">
                        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                    </div>
                
                    <div className="meta">
                        <h3>{data.title}</h3>

                        <div className={"pricing"}>
                            <span>${data.discountedPrice}</span>
                            <small>
                                <strike>${data.price}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {(
                            counter < 1 ? 
                            <button className={"cart-add card-add__modal"} onClick={increasedCounterByOne}>
                                <span>Add to Cart</span>
                                <img src={AddToCartIcon} alt="cart Icon"></img>
                            </button> 
                            : 
                            <div className={"cart-addon cart-addon__modal"}>
                                <button onClick={decreasedCounterByOne}><span>-</span></button>
                                <span className={"counter"}>{counter}</span>
                                <button onClick={increasedCounterByOne}><span>+</span></button>
                            </div> 
                        )}
                    </div>

                </div>

                
            </Modal>}
        </Fragment>
    )
}

export default ListItem;