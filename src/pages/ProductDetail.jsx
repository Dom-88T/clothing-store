import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addItemToCart } from '../store/cartSlice'; 
import { useGetProductByIdQuery } from '../services/api'; 
import TopBanner from '../components/TopBanner'; 
import NavBar from '../components/NavBar'; 
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading: loading } = useGetProductByIdQuery(id); 
  const [selectedColor, setSelectedColor] = useState('Green');
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Product Details');

  const reviews = [
    { name: 'Samantha D.', rating: 5, comment: 'I absolutely love this! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to t-shirt.', date: 'Posted on August 14, 2025' },
    { name: 'Alex M.', rating: 5, comment: 'This shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.', date: 'Posted on August 15, 2025' },
    { name: 'Ethan R.', rating: 5, comment: 'This t-shirt is a must-have for anyone who appreciates good design. The fit is perfect, and the material is high quality. I love how it combines simplicity and functionality. This t-shirt not only looks great but also feels great to wear.', date: 'Posted on August 16, 2025' },
  ];

  if (loading) return <div className="text-center py-16 text-xl">Loading...</div>;
  if (!product) return <div className="text-center py-16 text-xl text-red-500">Product not found.</div>;

  const originalPrice = product.price.toFixed(2);
  const discountedPrice = (product.price * 0.6).toFixed(2);

 const handleAddToCart = () => {
  dispatch(addItemToCart({
    id: product.id,
    title: product.title,
    price: discountedPrice,
    image: product.image,
  }));
};

  return (
    <>
      <TopBanner />
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> &gt; Shop &gt; Men &gt; T-Shirts
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex md:flex-col gap-4">
                <img src={product.image} alt="Thumbnail 1" className="w-16 h-16 object-cover rounded-lg cursor-pointer" />
                <img src={product.image} alt="Thumbnail 2" className="w-16 h-16 object-cover rounded-lg cursor-pointer" />
                <img src={product.image} alt="Thumbnail 3" className="w-16 h-16 object-cover rounded-lg cursor-pointer" />
              </div>
              <img src={product.image} alt={product.title} className="flex-1 h-auto object-contain rounded-lg" />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold uppercase mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'fill-yellow-400' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.545l6.561-.955L10 0l3.439 5.59 6.561 .955-4.755 4.636L18.878 18.09z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">({product.rating.count})</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-black">${discountedPrice}</span>
              <span className="text-xl line-through text-gray-500 ml-2">${originalPrice}</span>
              <span className="text-red-500 ml-2 font-bold">-40%</span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <label className="block font-bold mb-2">Select Colors</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-full p-2 border rounded bg-white">
                <option>Green</option>
                <option>Black</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">Choose Size</label>
              <div className="flex gap-2">
                {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-full ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex border rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
                <span className="px-6 py-2 border-x">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
              </div>
              <button onClick={handleAddToCart} className="ml-4 bg-black text-white px-8 py-3 rounded-full flex-1">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex border-b mb-6">
            <button onClick={() => setActiveTab('Product Details')} className={`px-6 py-2 ${activeTab === 'Product Details' ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}>
              Product Details
            </button>
            <button onClick={() => setActiveTab('Rating & Reviews')} className={`px-6 py-2 ${activeTab === 'Rating & Reviews' ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}>
              Rating & Reviews
            </button>
            <button onClick={() => setActiveTab('FAQs')} className={`px-6 py-2 ${activeTab === 'FAQs' ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}>
              FAQs
            </button>
          </div>

          {activeTab === 'Product Details' && <p className="text-gray-600">{product.description}</p>}

          {activeTab === 'Rating & Reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">All Reviews ({reviews.length})</h3>
                <div className="flex gap-4">
                  <select className="border rounded p-2">
                    <option>Latest</option>
                  </select>
                  <button className="bg-black text-white px-4 py-2 rounded-full">Write a Review</button>
                </div>
              </div>
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.545l6.561-.955L10 0l3.439 5.59 6.561 .955-4.755 4.636L18.878 18.09z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'FAQs' && <p className="text-gray-600">Frequently asked questions about the product.</p>}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetail;