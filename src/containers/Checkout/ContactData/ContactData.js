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
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'street',
					label: 'Street',
					placeholder: 'Street'
				},
				value: ''
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'zipcode',
					label: 'Postal code',
					placeholder: 'Postal code'
				},
				value: ''
			},
			city: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'city',
					label: 'City',
					placeholder: 'City'
				},
				value: ''
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'country',
					label: 'Country',
					placeholder: 'Country'
				},
				value: ''
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
				value: ''
			}
		},
		loading: false
	};

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Damian',
				address: {
					city: 'Bydgoszcz',
					street: 'Toruńska',
					zipCode: '85-023'
				}
			},
			deliveryTime: 'asap'
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
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		this.setState({ orderForm: updatedOrderForm });
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
			<form>
				{formElementsArray.map((el) => {
					return (
						<Input
							key={el.id}
							elementType={el.config.elementType}
							elementConfig={el.config.elementConfig}
							label={el.config.elementConfig.label}
							value={el.config.value}
							changed={(event) => this.inputChangedHandler(event, el.id)}
						/>
					);
				})}
				<Button btnType="Success" clicked={this.orderHandler}>
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
