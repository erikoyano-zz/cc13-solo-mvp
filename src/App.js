import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './supermarket.png';
import axios from 'axios';
import logo from './Andalucia.png';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
function App() {
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		let element = await axios.get('/api/fashion');
		element = element.data.data;
		setProducts(element);
		setLoaded(true);
	}

	const addToCart = (products) => {
		setCart([...cart, { ...products }]);
	};

	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((products) => products !== productToRemove));
	};

	const navigateTo = (nextPage) => {
		setPage(nextPage);
	};

	const renderProducts = () => {
		return (
			<>
				<div className="wrapper">
					{products.map((product) => (
						<div className="products">
							<img className="images" src={product.image} alt={product.name} />
							<h3>{product.name}</h3>
							<h4>{product.cost}</h4>
							<button className="button1" onClick={() => addToCart(product)}>
								Add To Cart
							</button>
						</div>
					))}
				</div>
			</>
		);
	};

	const renderCart = () => {
		return (
			<>
				<h1> Your Cart</h1>
				<div className="wrapper">
					{cart.map((product) => (
						<div className="products">
							<img className="images" src={product.image} alt={product.name} />
							<h3>{product.name}</h3>
							<h4>{product.cost}</h4>
							<button
								className="button1"
								onClick={() => removeFromCart(product)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
			</>
		);
	};

	return (
		<div className="App">
			<header>
				<img className="logo" src={logo}></img>
			</header>
			<div className="cartTop">
				<div className="cartLength">({cart.length})</div>
				<img
					className="cart"
					src={Cart}
					onClick={() => navigateTo(PAGE_CART)}
				/>
			</div>
			<button
				className="button1"
				id="back"
				onClick={() => navigateTo(PAGE_PRODUCTS)}
			>
				Back
			</button>
			{page === PAGE_PRODUCTS && renderProducts()};
			{page === PAGE_CART && renderCart()}
		</div>
	);
}
export default App;
