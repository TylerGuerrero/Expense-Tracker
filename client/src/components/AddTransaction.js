import React, { useState, useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionContext'
import uuid from 'uuid/v4'

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(TransactionContext);

    const handleSumbit = (e) => {
        e.preventDefault();
        addTransaction({text, amount: +amount, id: uuid()});
        setText("");
        setAmount(0);
    }

    return (
        <React.Fragment>
            <h3>Add a new Transaction</h3>
            <form onSubmit={(e) => handleSumbit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                    type="text" 
                    id="text" 
                    placeholder="Enter Text..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/></label>
                    <input 
                        type="number" 
                        id="amount"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </React.Fragment>
    )
}

export default AddTransaction
