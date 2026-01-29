import { useRef } from 'react';
import ProductCard from './ProductCard';

const ProductSlider = () => {
  const sliderRef = useRef(null);
  const products = Array.from({ length: 10 }, (_, index) => ({ id: index + 1 }));

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      
      <div className="relative mt-6">
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition hover:shadow-xl hover:text-amber-600"
          aria-label="Scroll left"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          ref={sliderRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-14"
        >
          {products.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition hover:shadow-xl hover:text-amber-600"
          aria-label="Scroll right"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;
