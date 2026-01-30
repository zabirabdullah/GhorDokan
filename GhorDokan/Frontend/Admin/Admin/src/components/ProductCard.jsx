import productImage from '../assets/product.png';

const ProductCard = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Image</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stock</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 bg-white hover:bg-amber-50 transition">
            <td className="px-4 py-4 text-sm text-gray-900 font-medium">P001</td>
            <td className="px-4 py-4">
              <img
                src={productImage}
                alt="Product"
                className="h-12 w-12 rounded object-cover"
              />
            </td>
            <td className="px-4 py-4 text-sm text-gray-900">Organic Honey</td>
            <td className="px-4 py-4 text-sm font-semibold text-amber-600">₹450</td>
            <td className="px-4 py-4 text-sm text-gray-600">Honey</td>
            <td className="px-4 py-4 text-sm text-gray-900">50</td>
            <td className="px-4 py-4">
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700"
                  title="View"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-green-700"
                  title="Edit"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-700"
                  title="Delete"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
