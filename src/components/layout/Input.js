import React from 'react';

export const Input = ({ id, children, type, placeholder, value, change }) => {
	return (
		<div className="form-control">
			<label htmlFor={id}>{children}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={change}
			/>
		</div>
	);
};
