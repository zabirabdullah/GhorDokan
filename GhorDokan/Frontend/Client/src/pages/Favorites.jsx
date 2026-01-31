import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

const Favorites = ({ isAuthenticated, user, toggleAuth }) => {
  const [favorites] = useState([
    {
      id: 1,
      name: 'Organic Honey',
      price: 500,
      category: 'Honey',
      image: 'https://via.placeholder.com/200?text=Honey'
    },
    {
      id: 3,
      name: 'Natural Oil',
      price: 500,
      category: 'Oil',
      image: 'https://via.placeholder.com/200?text=Oil'
    },
    {
      id: 5,
      name: 'Pure Ghee',
      price: 800,
      category: 'Dairy',
      image: 'https://via.placeholder.com/200?text=Ghee'
    },
    {
      id: 8,
      name: 'Pure Mustard Oil',
      price: 550,
      category: 'Oil',
      image: 'https://via.placeholder.com/200?text=MustardOil'
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar isAuthenticated={isAuthenticated} user={user} toggleAuth={toggleAuth} />

      <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <BackButton />

          <div className="mt-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Favorites</h1>
            <p className="text-gray-600">Your saved favorite items</p>
          </div>

          {favorites.length === 0 ? (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className="text-gray-600">No favorites yet. Start adding your favorite items!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {favorites.map((item) => (
                <div key={item.id} className="rounded-lg border border-gray-200 bg-white shadow hover:shadow-lg transition overflow-hidden group">
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <button
                      className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow hover:bg-red-50 transition"
                      title="Remove from favorites"
                    >
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-600 mb-1">{item.category}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">₹{item.price}</span>
                      <button className="rounded-lg bg-amber-600 px-3 py-2 text-white font-semibold transition hover:bg-amber-700">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
