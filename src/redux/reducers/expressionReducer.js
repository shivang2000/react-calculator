import { ADD_TO_EXPRESSION, EVALUATE_EXPRESSION, RESET_RESULT, DELETE_CHAR_EXPRESSION } from '../actions/actiontypes';


const initialState = {
    expression: '',
    result: 0,
    pressedEqualToButton: false,
    decimalNumberInUse: false
}

const expressionReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_EXPRESSION: { 
            if (action.payload === '.') {
                return {...state, expression: state.expression.concat(action.payload), decimalNumberInUse: true}
            }else if (['(',')','%','/','*','-','+'].includes(action.payload)) {
                return {...state, expression: state.expression.concat(action.payload), decimalNumberInUse: false}
            }
            return {...state, expression: state.expression.concat(action.payload)}
        }
        case EVALUATE_EXPRESSION: 
            return {...state, pressedEqualToButton: true, result: action.result, decimalNumberInUse: false}

        case DELETE_CHAR_EXPRESSION:
            if (state.expression.at(-1) === '.'){
                return {...state, expression: state.expression.slice(0,-1), decimalNumberInUse:false}
            }
            return {...state, expression: state.expression.slice(0,-1)}

        case RESET_RESULT: 
            return initialState

        default : return state
    }
}

export default expressionReducer;