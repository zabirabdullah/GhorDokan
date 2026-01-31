import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import OrderCard from '../components/OrderCard';

const Orders = ({ isAuthenticated, user, toggleAuth }) => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2026-01-28',
      total: 2500,
      status: 'Delivered',
      items: 3,
      address: 'Gulshan, Dhaka'
    },
    {
      id: 'ORD-002',
      date: '2026-01-25',
      total: 1800,
      status: 'Delivered',
      items: 2,
      address: 'Dhanmondi, Dhaka'
    },
    {
      id: 'ORD-003',
      date: '2026-01-20',
      total: 3200,
      status: 'Processing',
      items: 5,
      address: 'Mirpur, Dhaka'
    },
    {
      id: 'ORD-004',
      date: '2026-01-15',
      total: 1500,
      status: 'Delivered',
      items: 2,
      address: 'Banani, Dhaka'
    },
    {
      id: 'ORD-005',
      date: '2026-01-10',
      total: 2800,
      status: 'Delivered',
      items: 4,
      address: 'Uttara, Dhaka'
    },
    {
      id: 'ORD-006',
      date: '2026-01-05',
      total: 1200,
      status: 'Cancelled',
      items: 1,
      address: 'Motijheel, Dhaka'
    }
  ]);

  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredOrders = selectedStatus === 'All' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar isAuthenticated={isAuthenticated} user={user} toggleAuth={toggleAuth} />

      <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <BackButton />

          <div className="mt-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600">View all your past orders and their status</p>
          </div>

          {/* Status Filter */}
          <div className="mb-6 flex gap-2 flex-wrap">
            {['All', 'Processing', 'Delivered', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  selectedStatus === status
                    ? 'bg-amber-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-gray-600">No orders found</p>
              </div>
            ) : (
              filteredOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
