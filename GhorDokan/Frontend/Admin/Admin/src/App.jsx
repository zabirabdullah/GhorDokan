import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Customers from './pages/Customers';
import Products from './pages/Products';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/orders/:id" element={<Order />} />
				<Route path="/customers" element={<Customers />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</Router>
	);
};

export default App;
