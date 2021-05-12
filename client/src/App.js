import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import TransactionContextProvider from './contexts/TransactionContext'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TransactionContextProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction /> 
        </TransactionContextProvider>
      </div>
    </div>
  );
}

export default App;
