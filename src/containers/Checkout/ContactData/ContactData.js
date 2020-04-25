import React, { Component } from 'react';

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
		return (
			<div>
				<h4>Enter your contact data</h4>
				<form>
					<input type="text" name="name" placeholder="Your name" />
					<input type="email" name="email" placeholder="Your email address" />
					<input type="text" name="street" placeholder="Street" />
					<input type="text" name="postal" placeholder="Postal code" />
				</form>
			</div>
		);
	}
}

export default ContactData;
