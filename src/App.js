import './App.css';
// import ListItem from './components/ListItems/ListItem';
import Products from './components/Products/Products';
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/Subheader';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddItem = () => {
    setCartItems(cartItems + 1);
  }

  const handleRemoveItem = () => {
    setCartItems(cartItems - 1);
  }


  return (
    <div>
      <Header count={cartItems}/>
      <Subheader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;
