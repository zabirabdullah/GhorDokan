import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

const Cart = ({ isAuthenticated, user, toggleAuth }) => {
  const navigate = useNavigate();

  const [cartItems] = useState([
    {
      id: 1,
      name: 'Organic Honey',
      price: 500,
      quantity: 2,
      image: 'https://via.placeholder.com/150?text=Honey',
      category: 'Honey'
    },
    {
      id: 2,
      name: 'Pure Rice',
      price: 200,
      quantity: 5,
      image: 'https://via.placeholder.com/150?text=Rice',
      category: 'Grains'
    },
    {
      id: 3,
      name: 'Natural Oil',
      price: 500,
      quantity: 1,
      image: 'https://via.placeholder.com/150?text=Oil',
      category: 'Oil'
    }
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar isAuthenticated={isAuthenticated} user={user} toggleAuth={toggleAuth} />

      <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <BackButton />

          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600 mb-8">Review your items before checkout</p>

            {cartItems.length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-gray-600 mb-4">Your cart is empty</p>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow">
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-24 w-24 rounded-lg object-cover bg-gray-100"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-amber-600 font-semibold">₹{item.price}</span>
                              <span className="text-gray-600">Qty: {item.quantity}</span>
                              <span className="text-lg font-bold text-gray-900">
                                ₹{item.price * item.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow sticky top-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                    <div className="space-y-3 border-b border-gray-200 pb-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-gray-600">
                          <span>{item.name} × {item.quantity}</span>
                          <span>₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{calculateTotal()}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="text-green-600 font-semibold">Free</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span className="text-amber-600">₹{calculateTotal()}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="mt-6 w-full rounded-lg bg-amber-600 px-6 py-3 text-white font-semibold transition hover:bg-amber-700"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
