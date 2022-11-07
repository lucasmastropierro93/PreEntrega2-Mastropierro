import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartWidget from './Components/CartWidget';
import Checkout from './Components/Checkout';
import Contacto from './Components/Contacto';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Navbar from './Components/Navbar';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <header className='App-header'>
          <Navbar/>
      </header>
      <Routes>

        <Route path='/' element={<main className='App-main'><ItemListContainer/></main>}/>
        <Route path='/contacto' element={<main className='App-main'><Contacto/></main>}/>
        <Route path='/checkout' element={<main className='App-main'><Checkout/></main>}/>
        <Route path='/cartwidget' element={<CartWidget/>}/>

        <Route path='/item/:iditem' element={<main className='App-main'><ItemDetailContainer/></main>}/>
        <Route path='/category/:idcategory' element={<main className='App-main'><ItemListContainer/></main>}/>  
      </Routes>
      
      <footer>

      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;