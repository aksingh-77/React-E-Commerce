import { NavLink } from "react-router-dom";

const Subheader = () => {
    return (
        <div>
            <div className="subheader-container">
                <ul>
                    <li><NavLink to={{pathname:"/", search:""}} >Home</NavLink></li>
                    <li><NavLink to={{pathname:"/category-1", search:"category=1"}} >Category 1</NavLink></li>
                    <li><NavLink to={{pathname:"/category-2", search:"category=2"}} >Category 2</NavLink></li>
                    <li><NavLink to={{pathname:"/category-3", search:"category=3"}} >Category 3</NavLink></li>
                    <li><NavLink to={{pathname:"/category-4", search:"category=4"}} >Category 4</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Subheader;