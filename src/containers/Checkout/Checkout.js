import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	state = {
		ingredients: {}
	};
	checkoutCancelHandler = () => {
		this.props.history.goBack();
	};
	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		let updatedIngredients = {};
		for (let param of query.entries()) {
			updatedIngredients[param[0]] = parseInt(param[1], 10);
		}
		this.setState({ ingredients: updatedIngredients });
	}
	render() {
		return (
			<CheckoutSummary
				ingredients={this.state.ingredients}
				checkoutCancelled={this.checkoutCancelHandler}
				checkoutContinued={this.checkoutContinueHandler}
			/>
		);
	}
}

export default Checkout;
