import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
	}
	console.log(ingredients);
	const ingredientOutput = ingredients.map((ig) => (
		<span
			style={{
				textTransform: 'capitalize',
				display: 'inline-block',
				marginLeft: '10px'
			}}
			key={ig.name}
		>
			{ig.name}: {ig.amount}
		</span>
	));
	return (
		<div className={classes.Order}>
			<p>
				<strong>Order ID:</strong> {props.id}
			</p>
			<p>
				<strong>Ingredients:</strong>
				{ingredientOutput}
			</p>
			<p>
				<strong>Price: {Number.parseFloat(props.price).toFixed(2)}</strong>
			</p>
		</div>
	);
};

export default order;
