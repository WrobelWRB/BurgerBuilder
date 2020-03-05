import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h2>Your Order</h2>
			<p>Delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p className={classes.Total}>Total Price: {props.price}€</p>
			<Button btnType={'Success'} clicked={props.continued}>
				Confirm
			</Button>
			<Button btnType={'Danger'} clicked={props.canceled}>
				Cancel
			</Button>
		</Aux>
	);
};

export default orderSummary;
