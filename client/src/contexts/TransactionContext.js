import React, { createContext, useReducer, useEffect } from 'react'
import { transactionReducer }  from '../reducers/TransactionReducer'
import { DELETE_TRANSACTION, ADD_TRANSACTION } from '../types/types';

const initialState = {
    transactions: []
}

export const TransactionContext = createContext(initialState);

const TransactionContextProvider = ({ children }) => {        
    const [stateTransactions, dispatch] = useReducer(transactionReducer, initialState);

    useEffect(() => {
        
    }, [stateTransactions])

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: ADD_TRANSACTION,
            payload: transaction
        })
    }

    return (
        <TransactionContext.Provider value={
             { transactions: stateTransactions.transactions, 
             dispatch, deleteTransaction, addTransaction}}>
            { children } 
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider