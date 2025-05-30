import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenidos!"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
