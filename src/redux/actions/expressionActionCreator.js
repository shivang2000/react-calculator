import { evaluate } from 'mathjs'
import { ADD_TO_EXPRESSION, DELETE_CHAR_EXPRESSION, EVALUATE_EXPRESSION, RESET_RESULT } from './actiontypes'

export const addToExpression = (value) => {
    return {
        type: ADD_TO_EXPRESSION,
        payload: value
    }
}

export const evaluteExpression = (expression) => {
    const result = evaluate(expression)
    
    return {
        type: EVALUATE_EXPRESSION,
        result: result
    }
}

export const resetResult = () => {
    return {
        type: RESET_RESULT
    }
}

export const deleteCharFromExpression = () => {
    return {
        type: DELETE_CHAR_EXPRESSION
    }
}