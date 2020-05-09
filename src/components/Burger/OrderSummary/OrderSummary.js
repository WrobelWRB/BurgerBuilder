import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h2>Your Order</h2>
				<p>Delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p className={classes.Total}>Total Price: {this.props.price}€</p>
				<Button btnType={'Success'} clicked={this.props.continued}>
					Confirm
				</Button>
				<Button btnType={'Danger'} clicked={this.props.canceled}>
					Cancel
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
