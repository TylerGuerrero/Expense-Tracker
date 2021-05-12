import React, { useContext } from 'react'
import { TransactionContext }  from '../contexts/TransactionContext';
import Transaction from '../components/Transaction'

const TransactionList = () => {
    const { transactions } = useContext(TransactionContext);

    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => {
                    return (
                        <Transaction key={transaction.id} transaction={transaction} />
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default TransactionList
