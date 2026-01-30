import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Customers = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-8">
        <Link
          to="/"
          className="mb-6 inline-block rounded-lg bg-gray-600 px-6 py-2 font-semibold text-white transition hover:bg-gray-700"
        >
          Back
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Customers</h1>
          <div className="mt-2 h-1 w-32 rounded-full bg-amber-600" />
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow">
          <p className="text-gray-600">Customers management page - Coming soon</p>
        </div>
      </main>
    </div>
  );
};

export default Customers;
