import React from 'react';
import classes from './NavigationIcon.module.css';

const navigationIcon = (props) => {
	return (
		<div
			className={
				props.opened ? (
					[
						classes.NavIcon,
						classes.open
					].join(' ')
				) : (
					classes.NavIcon
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
