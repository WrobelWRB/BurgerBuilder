import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
	let className = classes.Backdrop;
	if (props.showBackdrop) {
		className = [
			classes.Backdrop,
			classes.In
		].join(' ');
	}
	return <div onClick={props.dismissed} className={className} />;
};

export default backdrop;
