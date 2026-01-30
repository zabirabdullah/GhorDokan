const Dashboard = () => {
  const dummyOrders = [
    { id: 1001, client: 'Ahmed Khan', bill: '₹2,500' },
    { id: 1002, client: 'Fatima Ali', bill: '₹3,200' },
    { id: 1003, client: 'Hassan Raza', bill: '₹1,800' },
    { id: 1004, client: 'Zainab Malik', bill: '₹4,100' },
    { id: 1005, client: 'Muhammad Hassan', bill: '₹2,900' },
    { id: 1006, client: 'Aisha Patel', bill: '₹3,500' },
    { id: 1007, client: 'Omar Farooq', bill: '₹1,950' },
    { id: 1008, client: 'Noor Jahan', bill: '₹5,200' },
    { id: 1009, client: 'Bilal Ahmed', bill: '₹2,400' },
    { id: 1010, client: 'Hana Siddiqui', bill: '₹3,750' },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8">
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order, index) => (
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
                  <button
                    type="button"
                    className="inline-block rounded-lg bg-amber-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-amber-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
