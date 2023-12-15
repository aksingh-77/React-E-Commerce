import './App.css';
// import ListItem from './components/ListItems/ListItem';
import Products from './components/Products/Products';
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/Subheader';

const App = () => {
  return (
    <div>
      <Header />
      <Subheader />
      <Products />
    </div>
  );
}

export default App;
