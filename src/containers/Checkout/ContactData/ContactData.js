import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'name',
					label: 'Your name',
					placeholder: 'Your name'
				},
				value: '',
				validation: {
					required: true,
					minLength: 2,
					feedback: 'Must be at least 2 characters long'
				},
				valid: true
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'street',
					label: 'Street',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true,
					feedback: 'This field is required'
				},
				valid: true
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'zipcode',
					label: 'Postal code',
					placeholder: 'Postal code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					feedback: 'Must be at least 5 characters long'
				},
				valid: true
			},
			city: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'city',
					label: 'City',
					placeholder: 'City'
				},
				value: '',
				validation: {
					required: true,
					feedback: 'This field is required'
				},
				valid: true
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'country',
					label: 'Country',
					placeholder: 'Country'
				},
				value: '',
				validation: {
					required: true,
					feedback: 'This field is required'
				},
				valid: true
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					label: 'Delivery',
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					],
					name: 'delivery',
					placeholder: 'Delivery method and time'
				},
				value: 'fastest',
				validation: {
					required: true
				},
				valid: true
			}
		},
		formIsValid: false,
		loading: false
	};

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let inputIdentifierEl in this.state.orderForm) {
			formData[inputIdentifierEl] = this.state.orderForm[inputIdentifierEl].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: parseInt(this.props.price).toFixed(2),
			orderData: formData
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
				console.log(response);
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({ loading: false });
				console.log(error);
			});
	};
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = { ...this.state.orderForm };
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
	};
	checkValidity = (value, rules) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		return isValid;
	};
	render() {
		let classList = [
			classes.ContactData
		];
		classList = this.props.showContact
			? [
					classes.ContactData,
					classes.Apear
				]
			: [
					classes.ContactData
				];

		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({ id: key, config: this.state.orderForm[key] });
		}

		let form = (
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map((el) => {
					return (
						<Input
							key={el.id}
							elementType={el.config.elementType}
							elementConfig={el.config.elementConfig}
							label={el.config.elementConfig.label}
							value={el.config.value}
							blured={(event) => this.inputChangedHandler(event, el.id)}
							changed={(event) => this.inputChangedHandler(event, el.id)}
							invalid={!el.config.valid}
							validationFeedback={el.config.validation.feedback}
						/>
					);
				})}
				<Button disabled={!this.state.formIsValid} btnType="Success">
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classList.join(' ')}>
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
