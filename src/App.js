import './App.css';
// import ListItem from './components/ListItems/ListItem';
import Products from './components/Products/Products';
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/Subheader';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(index > -1 ){
        items[index] = item;
    }
    else{
        items.push(item)
    }
    setCartItems([...items]);
  }

  const handleRemoveItem = item => {
    // setCartItems(cartItems - 1);
    let items = [...cartItems];
    let index = items.findIndex(i => i.id === item.id)
    if(items[index].quantity === 0){
      items.splice(index, 1)
    }
    else{
      items[index]=item
    }
    setCartItems([...items]);
  }


  return (
    <div>
      <Header count={cartItems.length} items={cartItems} />
      <Subheader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;
