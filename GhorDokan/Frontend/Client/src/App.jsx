import { Route, Router, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import AllProducts from './pages/AllProducts';
import Reg1A from './pages/Reg1A';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
	return (
		<>
		<ScrollToTop />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/registration" element={<Registration />} />
			<Route path="/products" element={<AllProducts />} />
			<Route path="/reg1a" element={<Reg1A />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
		</>
	);
};

export default App;
