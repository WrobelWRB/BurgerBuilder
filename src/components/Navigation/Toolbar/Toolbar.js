import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationIcon from '../NavigationIcon/NavigationIcon';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<NavigationIcon opened={props.navIconOpen} clicked={props.toggleSideDrawer} />
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
