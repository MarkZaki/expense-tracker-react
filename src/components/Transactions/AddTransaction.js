import React, { Fragment, useState, useContext } from 'react';
import { Input } from '../layout/Input';

import { AppContext } from '../../store/AppState';

export const AddTransaction = () => {
	const { addTransaction } = useContext(AppContext);
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const [error, setError] = useState(false);

	const submitHandler = e => {
		e.preventDefault();
		const newTransaction = {
			id: 'm-' + Math.floor(Math.random() * 25839573804782094) + 'id',
			text,
			amount: +amount
		};
		if (text && amount) {
			setError(false);
			addTransaction(newTransaction);
			setText('');
			setAmount(0);
		} else {
			setError(true);
		}
	};

	return (
		<Fragment>
			<h3>Add new transaction</h3>
			{error && <span className="error">Enter Data To Submit</span>}
			<form onSubmit={submitHandler}>
				<Input
					id="text"
					type="text"
					placeholder="Enter Text..."
					value={text}
					change={e => setText(e.target.value)}
				>
					Text
				</Input>
				<Input
					id="amount"
					type="number"
					placeholder="Enter Amount..."
					value={amount}
					change={e => setAmount(e.target.value)}
				>
					Amount <br />
					(negative - expense, positive - income)
				</Input>
				<button className="btn">Add transaction</button>
			</form>
		</Fragment>
	);
};
