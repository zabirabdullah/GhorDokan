import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CreateProduct = () => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    // Product upload logic will be implemented later
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    // Category upload logic will be implemented later
  };

  const handleDeleteCategory = (e) => {
    e.preventDefault();
    // Delete category logic will be implemented later
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-12 pt-8">
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Products</span>
        </Link>

        {/* Product Section */}
        <div className="mb-12 rounded-lg border border-gray-200 bg-white p-8 shadow">
          <h2 className="text-2xl font-bold text-gray-900">Product</h2>
          <div className="mt-2 mb-6 h-1 w-20 rounded-full bg-amber-600" />

          <form onSubmit={handleProductSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Product name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                placeholder="Product description"
                rows={4}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  placeholder="0.00"
                  step="0.01"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="productDiscount" className="block text-sm font-medium text-gray-700">
                  Discount (optional)
                </label>
                <input
                  type="number"
                  id="productDiscount"
                  name="productDiscount"
                  placeholder="0.00"
                  step="0.01"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                >
                  <option value="">Select category</option>
                  <option value="honey">Honey</option>
                  <option value="oil">Oil</option>
                  <option value="spices">Spices</option>
                  <option value="ghee">Ghee</option>
                  <option value="grocery">Grocery</option>
                </select>
              </div>

              <div>
                <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">
                  Stock
                </label>
                <input
                  type="number"
                  id="productStock"
                  name="productStock"
                  placeholder="0"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              Upload Product
            </button>
          </form>
        </div>

        {/* Category Section */}
        <div className="mb-12 rounded-lg border border-gray-200 bg-white p-8 shadow">
          <h2 className="text-2xl font-bold text-gray-900">Category</h2>
          <div className="mt-2 mb-6 h-1 w-20 rounded-full bg-amber-600" />

          <form onSubmit={handleCategorySubmit} className="space-y-6">
            <div>
              <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                placeholder="Category name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              Upload Category
            </button>
          </form>


          <form onSubmit={handleDeleteCategory} className="space-y-6 mt-8">
            <div>
              <label htmlFor="deleteCategorySelect" className="block text-sm font-medium text-gray-700">
                Select Category to Delete
              </label>
              <select
                id="deleteCategorySelect"
                name="deleteCategorySelect"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              >
                <option value="">Select category</option>
                <option value="honey">Honey</option>
                <option value="oil">Oil</option>
                <option value="spices">Spices</option>
                <option value="ghee">Ghee</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Delete Category
            </button>
          </form>

        </div>
      </main>
    </div>
  );
};

export default CreateProduct;
