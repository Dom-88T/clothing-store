import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;