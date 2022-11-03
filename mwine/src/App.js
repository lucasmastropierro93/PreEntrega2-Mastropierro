import './App.css'
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Navbar/>
      </header>
      <main className='App-main'>
      <ItemListContainer/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;