import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductSlider from '../components/ProductSlider';
import SliderTitle from '../components/SliderTitle';

const Home = ({ isAuthenticated, user, toggleAuth }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar isAuthenticated={isAuthenticated} user={user} toggleAuth={toggleAuth} />
      <main className="space-y-8 pb-10 pt-6 sm:space-y-12 sm:pb-12 sm:pt-8">
        <Banner />
        <SliderTitle title="Best Sellers"/>
        <ProductSlider />

        <SliderTitle title="Honey"/>
        <ProductSlider />

        <SliderTitle title="Oil"/>
        <ProductSlider />

      </main>
      <Footer />



      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-amber-600/70 text-white shadow transition hover:bg-amber-600"
          aria-label="Scroll to top"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
