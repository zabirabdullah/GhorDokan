import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-amber-600 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 transition hover:opacity-80">
          <img src={logo} alt="GhorDokan logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold tracking-wide">GhorDokan</span>
          
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <button className="transition hover:opacity-80">Log out</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
