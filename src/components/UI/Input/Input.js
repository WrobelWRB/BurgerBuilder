import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;

	const inputClasses = [
		classes.InputElement
	];
	const feedbackClasses = [
		classes.Feedback
	];

	if (props.invalid) {
		inputClasses.push(classes.Invalid);
		feedbackClasses.push(classes.In);
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					onBlur={props.blured}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					onBlur={props.blured}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				>
					{props.elementConfig.options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
			<div className={feedbackClasses.join(' ')}>{props.validationFeedback}</div>
		</div>
	);
};

export default input;
