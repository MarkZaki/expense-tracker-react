import React from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/Transactions/TransactionList';
import { AddTransaction } from './components/Transactions/AddTransaction';

import { AppProvider } from './store/AppState';

export const App = () => {
	return (
		<div className="App">
			<AppProvider>
				<Header />
				<div className="container">
					<Balance />
					<IncomeExpenses />
					<TransactionList />
					<AddTransaction />
				</div>
			</AppProvider>
		</div>
	);
};
