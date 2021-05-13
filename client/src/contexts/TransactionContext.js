import React, { createContext, useReducer, useEffect } from 'react'
import { transactionReducer }  from '../reducers/TransactionReducer'

const initialState = {
    transactions: []
}

export const TransactionContext = createContext(initialState);

const TransactionContextProvider = ({ children }) => {        
    const [stateTransactions, dispatch] = useReducer(transactionReducer, initialState);

    useEffect(() => {
        
    }, [stateTransactions])

    
    return (
        <TransactionContext.Provider value={
             { transactions: stateTransactions.transactions, 
             dispatch}}>
            { children } 
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider