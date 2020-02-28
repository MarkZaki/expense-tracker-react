import React, { Fragment, useContext } from 'react';
import { Transaction } from './Transaction';

import { AppContext } from '../../store/AppState';

export const TransactionList = () => {
	const { transactions } = useContext(AppContext);
	return (
		<Fragment>
			<h3>History</h3>
			<ul className="list">
				{transactions.map(transaction => (
					<Transaction
						key={transaction.id}
						id={transaction.id}
						text={transaction.text}
						amount={transaction.amount}
					/>
				))}
			</ul>
		</Fragment>
	);
};
