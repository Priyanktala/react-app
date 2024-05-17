import Headers from './commponet/Header';
import Home from './commponet/Home';
import CartDetails from './commponet/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import About from './commponet/About';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      
     </Routes>
     <Toaster />
    </>
  );
}

export default App;