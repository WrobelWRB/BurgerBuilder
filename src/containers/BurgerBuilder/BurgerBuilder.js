import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
	salad: 1.3,
	bacon: 2.2,
	cheese: 1.3,
	meat: 2.1
};

class BurgerBuilder extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	};
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 0,
		purchasing: false,
		loading: false
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};
	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};
	dismissHandler = () => {
		this.setState({ purchasing: false });
	};
	continueHandler = () => {
		//	alert('Your order has been sent');
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
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
				alert('We received your order :)');
				this.setState({ purchasing: false, loading: false });
			})
			.catch((error) => {
				this.setState({ purchasing: false, loading: false });
				console.log(error);
			});
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		const ingredientsObject = { ...this.state.ingredients };
		const disabledOrderInfo = Object.values(ingredientsObject).reduce((a, c) => a + c) === 0;

		let orderSummary = (
			<OrderSummary
				ingredients={this.state.ingredients}
				canceled={this.dismissHandler}
				continued={this.continueHandler}
				price={this.state.totalPrice.toFixed(2)}
			/>
		);
		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal showModal={this.state.purchasing} hideModal={this.dismissHandler} loading={this.state.loading}>
					{orderSummary}
				</Modal>
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					totalPrice={this.state.totalPrice.toFixed(2)}
					disabled={disabledInfo}
					disabledOrder={disabledOrderInfo}
					orderNow={this.purchaseHandler}
				/>
				<Burger ingredients={this.state.ingredients} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
