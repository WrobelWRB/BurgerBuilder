import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Orders.module.css';
class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};
	componentDidMount() {
		axios
			.get('/orders.json')
			.then((response) => {
				const fetchedOrders = [];
				for (let key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key
					});
				}

				this.setState({ orders: fetchedOrders, loading: false });
			})
			.catch((err) => {
				this.setState({ loading: false });
				console.log(err);
			});
	}
	render() {
		return (
			<div className={classes.Orders}>
				<h1>Your orders</h1>
				{this.state.orders.map((order) => (
					<Order id={order.id} ingredients={order.ingredients} price={order.price} />
				))}
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
