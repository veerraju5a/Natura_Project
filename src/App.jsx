import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { Router } from './Routes/Router';

function App() {
  return (
    <>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </>
  );
}

export default App;
