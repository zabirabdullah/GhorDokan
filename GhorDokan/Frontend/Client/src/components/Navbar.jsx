import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-amber-600 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GhorDokan logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold tracking-wide">GhorDokan</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <button className="transition hover:opacity-80">Sign In</button>
          <button className="transition hover:opacity-80">Products</button>
          <button className="transition hover:opacity-80">Orders</button>
          <button className="transition hover:opacity-80">Cart</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
