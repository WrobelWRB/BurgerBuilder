import React from 'react';
import classes from './DrawerToggle.module.css';

const navigationIcon = (props) => {
	return (
		<div
			className={
				props.opened ? (
					[
						classes.DrawerToggle,
						classes.open
					].join(' ')
				) : (
					classes.DrawerToggle
				)
			}
			onClick={props.clicked}
		>
			<span />
			<span />
			<span />
			<span />
		</div>
	);
};

export default navigationIcon;
