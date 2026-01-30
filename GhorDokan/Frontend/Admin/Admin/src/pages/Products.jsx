import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
            <div className="mt-2 h-1 w-32 rounded-full bg-amber-600" />
          </div>

          <div className="flex gap-3">
            <Link
              to="/products/create"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Create Product or Category
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
