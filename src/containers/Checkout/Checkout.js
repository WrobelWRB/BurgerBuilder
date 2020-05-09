import React, { Component } from 'react';
import ContactData from './ContactData/ContactData';
import classes from './Checkout.module.css';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	state = {
		ingredients: {},
		showContactData: false
	};
	checkoutCancelHandler = () => {
		this.props.history.goBack();
		this.setState({ showContactData: false });
	};
	checkoutContinueHandler = () => {
		this.props.history.push({ pathname: this.props.location.pathname + '/contact-data' });
		this.setState({ showContactData: true });
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
			<div className={classes.Checkout}>
				<CheckoutSummary
					showContact={this.state.showContactData}
					ingredients={this.state.ingredients}
					checkoutCancelled={this.checkoutCancelHandler}
					checkoutContinued={this.checkoutContinueHandler}
					continueDisabled={this.state.showContactData}
				/>
				<ContactData showContact={this.state.showContactData} />
			</div>
		);
	}
}

export default Checkout;
