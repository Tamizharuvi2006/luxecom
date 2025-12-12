import React from 'react';
import { useCart } from '../Context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Components/Header';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/dumpme');
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6">
          <div className="text-center space-y-6">
            <ShoppingBag size={80} className="mx-auto text-[#C5A059]" />
            <h2 className="text-3xl font-serif text-[#2C2C2C]">Your Cart is Empty</h2>
            <p className="text-[#4F4F4F]">Start shopping to add items to your cart!</p>
            <Link 
              to="/shop" 
              className="inline-block px-8 py-3 bg-[#2C2C2C] text-[#F5F0E6] uppercase tracking-[0.3em] text-xs font-semibold hover:bg-[#C5A059] transition-all duration-300 rounded-lg"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F5F0E6] py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Shopping Cart</h1>
            <p className="text-[#4F4F4F] mt-2">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8C7B5A]">{item.category}</p>
                        <h3 className="text-lg font-serif text-[#2C2C2C] mt-1">{item.name}</h3>
                      </div>

                      <p className="text-xl font-semibold text-[#C5A059]">{item.price}</p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-[#E4D8C4] rounded-lg flex items-center justify-center hover:bg-[#F5F0E6] transition-colors"
                          >
                            <Minus size={16} className="text-[#2C2C2C]" />
                          </button>
                          <span className="text-[#2C2C2C] font-semibold w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-[#E4D8C4] rounded-lg flex items-center justify-center hover:bg-[#F5F0E6] transition-colors"
                          >
                            <Plus size={16} className="text-[#2C2C2C]" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24 space-y-6">
                <h2 className="text-2xl font-serif text-[#2C2C2C]">Order Summary</h2>

                <div className="space-y-3 py-4 border-y border-[#E4D8C4]">
                  <div className="flex justify-between text-[#4F4F4F]">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#4F4F4F]">
                    <span>Shipping</span>
                    <span className="text-[#C5A059]">Free</span>
                  </div>
                  <div className="flex justify-between text-[#4F4F4F]">
                    <span>Tax</span>
                    <span>₹0.00</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-semibold text-[#2C2C2C]">
                  <span>Total</span>
                  <span className="text-[#C5A059]">₹{cartTotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 px-6 bg-[#2C2C2C] text-[#F5F0E6] uppercase tracking-[0.3em] text-sm font-semibold hover:bg-[#C5A059] transition-all duration-300 rounded-lg"
                >
                  Proceed to Checkout
                </button>

                <Link 
                  to="/shop"
                  className="block text-center text-sm text-[#4F4F4F] hover:text-[#C5A059] transition-colors uppercase tracking-[0.2em]"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
