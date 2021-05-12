import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types/types'

// the state with be binded to the useReducer object
// the action will be binded to the dispatch object

// reducer has previous state and action
// it take the action and create a brand new state
// state is immutable
// when changing it it will use a previous copy of it 
// create a brand new one with updated data

export const transactionReducer = (state, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => (transaction.id !== action.payload))
            }
        default:
            return state;

    }
}
