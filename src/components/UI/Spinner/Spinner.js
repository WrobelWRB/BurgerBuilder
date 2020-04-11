import React from 'react';
import classes from './Spinner.module.css';

let spinnerClass;

const spinner = (props) => {
	switch (props.type) {
		case 'builder':
			spinnerClass = classes.BuilderLoader;
			break;
		case 'order':
			spinnerClass = classes.OrderLoader;
			break;
		default:
			spinnerClass = classes.OrderLoader;
	}

	return <div className={spinnerClass}>Loading...</div>;
};

export default spinner;
