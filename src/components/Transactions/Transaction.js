import React, { useContext } from 'react';

import { AppContext } from '../../store/AppState';

export const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(AppContext);
	const sign = amount < 0 ? '-' : '+';
	const borderColor = amount < 0 ? 'minus' : 'plus';
	return (
		<li className={borderColor}>
			{text}
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button onClick={() => deleteTransaction(id)} className="delete-btn">
				x
			</button>
		</li>
	);
};
