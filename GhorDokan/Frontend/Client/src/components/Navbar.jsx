import { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-amber-600 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GhorDokan logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold tracking-wide">GhorDokan</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <button className="transition hover:opacity-80">Sign In</button>
          <button className="transition hover:opacity-80">Products</button>
          <button className="transition hover:opacity-80">Orders</button>
          <button className="transition hover:opacity-80">Cart</button>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 transition hover:bg-white/30 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/20 bg-amber-600/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 pt-3 text-sm font-medium">
            <button className="rounded-lg px-3 py-2 text-left transition hover:bg-white/10">Sign In</button>
            <button className="rounded-lg px-3 py-2 text-left transition hover:bg-white/10">Products</button>
            <button className="rounded-lg px-3 py-2 text-left transition hover:bg-white/10">Orders</button>
            <button className="rounded-lg px-3 py-2 text-left transition hover:bg-white/10">Cart</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
