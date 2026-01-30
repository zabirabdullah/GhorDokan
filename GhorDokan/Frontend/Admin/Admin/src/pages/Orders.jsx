import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Orders = () => {
  const allOrders = [
    { id: 1001, client: 'Ahmed Khan', bill: '₹2,500', status: 'pending' },
    { id: 1002, client: 'Fatima Ali', bill: '₹3,200', status: 'pending' },
    { id: 1003, client: 'Hassan Raza', bill: '₹1,800', status: 'pending' },
    { id: 1004, client: 'Zainab Malik', bill: '₹4,100', status: 'pending' },
    { id: 1005, client: 'Muhammad Hassan', bill: '₹2,900', status: 'pending' },
    { id: 1006, client: 'Aisha Patel', bill: '₹3,500', status: 'completed' },
    { id: 1007, client: 'Omar Farooq', bill: '₹1,950', status: 'completed' },
    { id: 1008, client: 'Noor Jahan', bill: '₹5,200', status: 'completed' },
    { id: 1009, client: 'Bilal Ahmed', bill: '₹2,400', status: 'completed' },
    { id: 1010, client: 'Hana Siddiqui', bill: '₹3,750', status: 'completed' },
  ];

  const getStatusColor = (status) => {
    if (status === 'pending') {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-green-100 text-green-800';
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber-600" />
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
              {allOrders.map((order, index) => (
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
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
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

export default Orders;
