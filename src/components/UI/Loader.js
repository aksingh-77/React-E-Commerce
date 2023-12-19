import ReactDOM from "react-dom";


/**Here we have got the method in props which will call the method to handle Modal i.e handleModal from file ListItem ==> modal.js and than finally here */
export const Backdrop = props => {
    const handleClick = () => {
        if(props.onClose){
            props.onClose();
        }
    }

    return (
        <div onClick={handleClick} className={"loader-overlay"}></div>
    )
}

const Loader = () => {
    return (
        ReactDOM.createPortal(<>
            <Backdrop />
            <div className={"loading-dots"}>
                <div>Loading...</div>
                <div className={"loading-dots--dot"}></div>
                <div className={"loading-dots--dot"}></div>
                <div className={"loading-dots--dot"}></div>
            </div>
        </>, document.getElementById("loader-root"))
        
    )
}

export default Loader;