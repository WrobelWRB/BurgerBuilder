import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
			<h3>Your Order</h3>
			<p>Delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<Button btnType={'Success'}>Confirm</Button>
			<Button btnType={'Danger'} clicked={props.cancel}>
				Cancel
			</Button>
		</Aux>
	);
};

export default orderSummary;
