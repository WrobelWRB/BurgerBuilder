import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
	let classList = [classes.CheckoutSummary];
	classList = props.showContact ? [classes.CheckoutSummary, classes.Aside] : [classes.CheckoutSummary];

	return (
		<div className={classList.join(' ')}>
			<h1>We hope it tastes well!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger place="order" ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.checkoutCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.checkoutContinued} disabled={props.continueDisabled}>
				CONTINUE
			</Button>
		</div>
	);
};

export default checkoutSummary;
