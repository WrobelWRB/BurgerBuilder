import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
		purchasing: false
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
		alert('Your order has been sent');
		this.setState({ purchasing: false });
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		const ingredientsObject = { ...this.state.ingredients };
		const disabledOrderInfo = Object.values(ingredientsObject).reduce((a, c) => a + c) === 0;

		return (
			<Aux>
				<Modal showModal={this.state.purchasing} hideModal={this.dismissHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						canceled={this.dismissHandler}
						continued={this.continueHandler}
						price={this.state.totalPrice.toFixed(2)}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					totalPrice={this.state.totalPrice.toFixed(2)}
					disabled={disabledInfo}
					disabledOrder={disabledOrderInfo}
					orderNow={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
