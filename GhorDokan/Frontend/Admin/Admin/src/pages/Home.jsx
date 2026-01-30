import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const pendingOrders = [
    { id: 1001, client: 'Ahmed Khan', bill: '₹2,500', status: 'pending' },
    { id: 1002, client: 'Fatima Ali', bill: '₹3,200', status: 'pending' },
    { id: 1003, client: 'Hassan Raza', bill: '₹1,800', status: 'pending' },
    { id: 1004, client: 'Zainab Malik', bill: '₹4,100', status: 'pending' },
    { id: 1005, client: 'Muhammad Hassan', bill: '₹2,900', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-8">
        {/* Management Buttons */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <Link
            to="/orders"
            className="rounded-lg bg-amber-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-amber-700"
          >
            Manage Orders
          </Link>
          <Link
            to="/customers"
            className="rounded-lg bg-amber-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-amber-700"
          >
            Manage Customers
          </Link>
          <Link
            to="/products"
            className="rounded-lg bg-amber-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-amber-700"
          >
            Manage Products
          </Link>
        </div>

        {/* Pending Orders Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Pending Orders</h2>
          <div className="mt-2 h-1 w-32 rounded-full bg-amber-600" />
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-amber-50 transition`}
                >
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.client}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-amber-600">{order.bill}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {order.id === 1001 ? (
                      <Link
                        to={`/orders/${order.id}`}
                        className="inline-block rounded-lg bg-amber-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-amber-700"
                      >
                        Action
                      </Link>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-xs font-medium text-gray-500 cursor-not-allowed"
                      >
                        Action
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;
