import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" exact>BurgerBuilder</NavigationItem>
			<NavigationItem link="/orders">Orders</NavigationItem>
		</ul>
	);
};

export default navigationItems;
