import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<p>
				Total Price: <strong>{props.totalPrice}</strong>
			</p>
			<button className={classes.OrderButton} disabled={props.disabledOrder} onClick={props.orderNow}>
				ORDER NOW
			</button>
		</div>
	);
};

export default buildControls;
