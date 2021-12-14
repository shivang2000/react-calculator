import { ADD_TO_EXPRESSION } from './actiontypes'

export const addToExpression = (value) => {
    return {
        type: ADD_TO_EXPRESSION,
        payload: value
    }
}

