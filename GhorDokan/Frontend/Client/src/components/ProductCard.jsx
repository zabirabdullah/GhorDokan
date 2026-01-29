import { useState } from 'react';
import productImage from '../assets/product.png';

const ProductCard = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => setQuantity((prev) => Math.max(0, prev - 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  return (
    /* w-[22%] ensures 4 cards fit with space, 
       and the 5th is partially visible to encourage scrolling.
    */
    <div className="flex w-[22%] min-w-[265px] flex-shrink-0 flex-col rounded-[20px] border border-gray-100 bg-white p-3 shadow-md">
      
      {/* Image Container */}
      <div className="flex justify-center rounded-xl bg-[#f8f8f8] py-4">
        <img 
          src={productImage} 
          alt="Honey" 
          className="h-42 w-auto object-contain mix-blend-multiply" 
        />
      </div>

      {/* Product Details */}
      <div className="mt-3 flex-grow px-1">
        <h3 className="text-lg font-bold text-[#0a2351]">Honey</h3>
        <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">100% natural organic honey</p>
        
        <div className="mt-1">
          <p className="text-amber-600 font-semibold text-sm">
            Price: 100 BDT
          </p>
          <p className="text-xs text-gray-500">Quantity: 1 Kg</p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f1f3f6] px-4 py-1.5">
        <button
          type="button"
          onClick={handleDecrease}
          className="text-xl font-bold text-gray-600 transition hover:text-black"
        >
          &minus;
        </button>
        <span className="text-lg font-semibold text-gray-800">{quantity}</span>
        <button
          type="button"
          onClick={handleIncrease}
          className="text-lg font-bold text-gray-600 transition hover:text-black"
        >
          &#43;
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        type="button"
        className="mt-2 w-full rounded-xl bg-[#e67e00] py-2 text-sm font-bold text-white transition hover:bg-[#cf7100] active:scale-[0.95]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;