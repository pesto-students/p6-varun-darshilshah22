import React from 'react'
import "./homepage.css"
import { Header } from '../transactions/Header';
import { Balance } from '../transactions/Balance';
import { IncomeExpenses } from '../transactions/IncomeExpenses';
import { TransactionList } from '../transactions/TransactionList';
import { AddTransaction } from '../transactions/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

const Homepage = ({setLoginUser}) => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default Homepage
