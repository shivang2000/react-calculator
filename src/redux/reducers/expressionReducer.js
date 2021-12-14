import { hasNumericValue } from 'mathjs';
import { ADD_TO_EXPRESSION } from '../actions/actiontypes';

const initialState = {
    expression: '',
    result: 0
}

const expressionReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_EXPRESSION: 
            return {...state, expression: state.expression.concat(action.payload)}

        
        default : return state
    }
}

export default expressionReducer;