const OrderCard = ({ order }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition">
      <div className="grid gap-4 sm:grid-cols-5 items-center">
        <div>
          <p className="text-sm text-gray-600">Order ID</p>
          <p className="text-lg font-semibold text-gray-900">{order.id}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Date</p>
          <p className="text-lg font-semibold text-gray-900">{order.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Items</p>
          <p className="text-lg font-semibold text-gray-900">{order.items}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-lg font-semibold text-amber-600">₹{order.total}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
              order.status === 'Delivered'
                ? 'bg-green-100 text-green-700'
                : order.status === 'Processing'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {order.status}
            </span>
          </div>
          <button className="text-amber-600 font-semibold hover:text-amber-700 transition">
            View
          </button>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <strong>Delivery Address:</strong> {order.address}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
