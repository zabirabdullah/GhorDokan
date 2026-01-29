const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold text-white">About Us</h3>
          <p className="mt-3 text-slate-300">
            GhorDokan brings fresh, organic products straight to your doorstep.
            Quality and authenticity guaranteed.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Customer Service</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Email: info@ghorerdokan.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs text-slate-400">
          <span>© 2024 GhorDokan. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
