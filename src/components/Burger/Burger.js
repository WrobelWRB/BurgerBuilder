import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import Aux from '../../hoc/Aux/Aux';
import PropTypes from 'prop-types';

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [
				...Array(props.ingredients[igKey])
			].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.flat();
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Add some ingredients.</p>;
	}

	let burgerClasses = [
		classes.Burger
	];
	//props.place === 'order' ? burgerClasses.push(classes.Order) : null;
	if (props.place === 'order') {
		burgerClasses.push(classes.Order);
	}

	return (
		<Aux>
			<div className={classes.BackgroundImage} />
			<div className={burgerClasses.join(' ')}>
				<BurgerIngredient type="bread-top" />
				{transformedIngredients}
				<BurgerIngredient type="bread-bottom" />
			</div>
		</Aux>
	);
};

burger.propTypes = {
	ingredients: PropTypes.object.isRequired
};

export default burger;
