import { Link } from 'react-router-dom';

const DashboardOrderCard = ({ order }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 text-sm font-semibold text-gray-900">{order.id}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
      <td className="px-4 py-3 text-sm font-semibold text-amber-600">₹{order.total}</td>
      <td className="px-4 py-3 text-sm">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
          order.status === 'Delivered' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-blue-100 text-blue-700'
        }`}>
          {order.status}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">
        <button className="text-amber-600 font-semibold hover:text-amber-700 transition">
          View
        </button>
      </td>
    </tr>
  );
};

export default DashboardOrderCard;
