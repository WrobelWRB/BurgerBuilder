import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
	return (
		<Aux>
			<div
				className={
					props.showed ? (
						[
							classes.SideDrawer,
							classes.Open
						].join(' ')
					) : (
						[
							classes.SideDrawer,
							classes.Close
						].join(' ')
					)
				}
			>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
			<div className={classes.Backdrop}>
				<Backdrop showBackdrop={props.showed} dismissed={props.clicked} />
			</div>
		</Aux>
	);
};

export default sideDrawer;
