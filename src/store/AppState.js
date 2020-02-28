import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
// initial state
const appState = {
	transactions: []
};

// create cotext
export const AppContext = createContext(appState);

//create provider
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, appState);
	// actions
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}
	return (
		<AppContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
