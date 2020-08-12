import React from 'react';

export default function Chart() {
	const cart = cart.map((product) => (
		<table className="table">
			<thead>Total Summary</thead>
			<tr>
				<td>Cost</td>
				<td>{product.cost}</td>
			</tr>
			<tr>
				<td>Tax</td>
				<td>{product.cost * 0.15}</td>
			</tr>
			<tr>
				<td>Shipping</td>
				<td>Always Free!</td>
			</tr>
			<tr>
				<td>Grand Total</td>
				<td>Always Free!</td>
			</tr>
		</table>
	));
}
