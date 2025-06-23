import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
