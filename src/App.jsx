import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; 
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Category from './pages/Category.jsx';
import NotFound from './pages/NotFound.jsx';

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