import React from "react";
import { connect, useDispatch } from "react-redux";
import './Button.css';
import { addToExpression } from '../redux/actions/expressionActionCreator'
import { evaluate, hasNumericValue } from "mathjs";

const Button = ({value, className, expression}) => {
    const dispatch = useDispatch()
   
    const handleOnClick = () => {
        if ( (!(hasNumericValue(expression.at(-1))) && !(hasNumericValue(value))) && !(value === '(' || value === '||') ){
            return
        }
        dispatch(addToExpression(value))
    }
    return (
        <button onClick={handleOnClick} className={className}>
            {value}
        </button >
    )
}

const mapStateToProps = (state) => {
    return {
        expression : state.expression.expression
    }
}

export default connect(mapStateToProps)(Button);