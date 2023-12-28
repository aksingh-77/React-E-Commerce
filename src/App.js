import './App.css';
import Products from './components/Products/Products';
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/Subheader';
import {Routes, Route} from 'react-router-dom';


const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [eventQueue, setEventQueue] = useState({id:"", type:""});
    

  // const handleAddItem = item => {
  //   let items = [...cartItems]
  //   let index = items.findIndex(i => i.id === item.id)
  //   if(index > -1 ){
  //       items[index] = item;
  //   }
  //   else{
  //       items.push(item)
  //   }
  //   setCartItems([...items]);
  // }

  // const handleRemoveItem = item => {
  //   // setCartItems(cartItems - 1);
  //   let items = [...cartItems];
  //   let index = items.findIndex(i => i.id === item.id)
  //   if(items[index].quantity === 0){
  //     items.splice(index, 1)
  //   }
  //   else{
  //     items[index]=item
  //   }
  //   setCartItems([...items]);
  // }

  // const handleEventQueue = (id, type) => {
  //   //if type == -1 than decrease
  //   //if type == 1 than increase
  //   console.log({id , type})
  //   setEventQueue({id, type})
  // }


  return (
    <div>
      <Header />
      <Subheader />
      <Routes>
        <Route path="/404" element={<h1>404! Not Found</h1>} />
        <Route path="/" element={ <Products/> } />
        <Route path="/:category?" element={ <Products/> } />
        {/* <Route path="/*" navigate> */}
      </Routes>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default App;
