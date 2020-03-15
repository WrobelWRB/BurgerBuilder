import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';
import breadTop from '../../../assets/images/ingredients/bread-top.png';
import breadBottom from '../../../assets/images/ingredients/bread-bottom.png';
import meat from '../../../assets/images/ingredients/meat.png';
import cheese from '../../../assets/images/ingredients/cheese.png';
import bacon from '../../../assets/images/ingredients/bacon.png';
import salad from '../../../assets/images/ingredients/salad.png';

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case 'bread-bottom':
				ingredient = <img src={breadBottom} alt="" className={classes.BreadBottom} />;
				break;
			case 'bread-top':
				ingredient = <img src={breadTop} alt="" className={classes.BreadTop} />;
				break;
			case 'meat':
				ingredient = <img src={meat} alt="" className={classes.Meat} />;
				break;
			case 'cheese':
				ingredient = <img src={cheese} alt="" className={classes.Cheese} />;
				break;
			case 'salad':
				ingredient = <img src={salad} alt="" className={classes.Salad} />;
				break;
			case 'bacon':
				ingredient = <img src={bacon} alt="" className={classes.Bacon} />;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;
