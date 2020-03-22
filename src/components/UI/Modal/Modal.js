import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import burger from '../../../assets/images/burger-logo.png';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.showModal !== nextProps.showModal || this.props.loading !== nextProps.loading;
	}
	componentDidUpdate() {
		console.log('[Modal] updated.');
	}
	render() {
		let classNames = classes.Modal;
		if (this.props.showModal) {
			classNames = [
				classes.Modal,
				classes.Summary,
				classes.In
			].join(' ');
		}
		if (this.props.loading) {
			classNames = [
				classes.Modal,
				classes.In,
				classes.Loading
			].join(' ');
		}
		return (
			<Aux>
				<Backdrop showBackdrop={this.props.showModal} dismissed={this.props.hideModal} />
				<div className={classNames}>
					<div className={classes.Header}>
						<img src={burger} alt="" />
					</div>
					<div className={classes.OrderSummary}>{this.props.children}</div>
				</div>
			</Aux>
		);
	}
}

export default Modal;
