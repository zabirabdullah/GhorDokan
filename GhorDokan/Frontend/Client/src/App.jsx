import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import AllProducts from './pages/AllProducts';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/registration" element={<Registration />} />
			<Route path="/products" element={<AllProducts />} />
		</Routes>
	);
};

export default App;
