import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { Product } from './pages/Product';
import Shop from './pages/Shop';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory Category="men" />} />
          <Route path='/womens' element={<ShopCategory Category="women" />} />
          <Route path='/kids' element={<ShopCategory Category="kid" />} />
          <Route path='/product'>
            <Route index element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
