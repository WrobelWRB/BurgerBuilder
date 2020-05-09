import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';


class ContactData extends Component {
	state = {
		name: '',
		email: '',
		adress: {
			street: '',
			postalCode: ''
		}
	};

	render() {
		let classList = [classes.ContactData];
		classList = this.props.showContact ? [classes.ContactData, classes.Apear] : [classes.ContactData];

		return (

			<div className={classList.join(' ')}>
				<h4>Enter your contact data</h4>
				<form>
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="email" placeholder="Your email address" />
					<input type="text" name="street" placeholder="Street" />
					<input type="text" name="postal" placeholder="Postal code" />
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>

		);
	}
}

export default ContactData;
