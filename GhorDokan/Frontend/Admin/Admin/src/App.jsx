import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Customers from './pages/Customers';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/orders/:id" element={<Order />} />
				<Route path="/customers" element={<Customers />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/create" element={<CreateProduct />} />
			</Routes>
		</Router>
	);
};

export default App;
