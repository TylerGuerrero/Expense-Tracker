import React, { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionContext'
import { deleteTransaction } from '../actions/TransactionAction'

const Transaction = ({ transaction }) => {
    const { dispatch } = useContext(TransactionContext);

    const sign = transaction.amount < 0 ? '-' : '+'
    
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            { transaction.text }
            <span>{sign}${Math.abs(transaction.amount)} </span>
            <button className="delete-btn" 
            onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button>
        </li>
    )
}

export default Transaction
