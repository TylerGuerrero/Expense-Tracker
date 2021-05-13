// actions are the only way to call a update to your state
// it will call a function that return a action object 
// with a type and payload

import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types/types';

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACTION,
        payload: id
    }
}

export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    }
}