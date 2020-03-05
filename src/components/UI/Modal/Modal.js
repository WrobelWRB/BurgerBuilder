import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import burger from '../../../assets/images/burger.png';

const modal = (props) => {
	let classNames = classes.Modal;
	if (props.showModal) {
		classNames = [
			classes.Modal,
			classes.In
		].join(' ');
	}
	return (
		<Aux>
			<Backdrop showBackdrop={props.showModal} dismissed={props.hideModal} />
			<div className={classNames}>
				<div className={classes.Header}>
					<img src={burger} alt="" />
				</div>
				<div className={classes.OrderSummary}>{props.children}</div>
			</div>
		</Aux>
	);
};

export default modal;
