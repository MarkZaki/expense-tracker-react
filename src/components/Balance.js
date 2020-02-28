import React, { Fragment, useContext } from 'react';

import { AppContext } from '../store/AppState';

export const Balance = () => {
	const { transactions } = useContext(AppContext);
	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<Fragment>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</Fragment>
	);
};
