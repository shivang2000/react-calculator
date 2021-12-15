import React from "react";
import { connect, useDispatch } from "react-redux";
import './Button.css';
import { addToExpression, resetResult } from '../redux/actions/expressionActionCreator'
import {  hasNumericValue } from "mathjs";


const Button = ({value, className, expression, pressedEqualToButton, onClick}) => {
    const dispatch = useDispatch()
   
    const handleOnClick = () => {
        // after the a result is produce to reset the state of application so we can use the calculator again and again
        if (pressedEqualToButton) {
            dispatch(resetResult())
            return ;
        }
        // no dispatching action addtoexpression when u try add operator one after another
        if ( (!(hasNumericValue(expression.at(-1))) && !(hasNumericValue(value))) && !(value === '(' || value === '||') ){
            return
        }
        dispatch(addToExpression(value))
    }
    return (
        <button onClick={onClick? onClick : handleOnClick} className={className}>
            {value}
        </button >
    )
}

const mapStateToProps = (state) => {
    return {
        expression : state.expression.expression,
        pressedEqualToButton: state.expression.pressedEqualToButton
    }
}

export default connect(mapStateToProps)(Button);