import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Button from './Button';
import './App.css'
import { deleteCharFromExpression, evaluteExpression, resetResult } from '../redux/actions/expressionActionCreator';

const App = ({result, expression, pressedEqualToButton}) => {
    const dispatch = useDispatch()

    const handleEqualToButton = () => {
        console.log('pressed = button');

        dispatch(evaluteExpression(expression))
    }

    const handleDelButton = () => {
        dispatch(deleteCharFromExpression())
    }

    const HandleACButton = () => {
        dispatch(resetResult())
    }

    return ( 
        <div className='container'>
            <div className='header'>
                Calculator
            </div>
            <input type="text" className='result' value={pressedEqualToButton ? result : expression} readOnly />
            <div className='first-row'>
                <Button  value="A/C" onClick={HandleACButton} className="global" />
                <Button  value="(" className="global" />
                <Button  value=")" className="global" />
                <Button  value="%" className="global" />
            </div>
            <div className='second-row'>
                <Button  value="7" className="global" />
                <Button  value="8" className="global" />
                <Button  value="9" className="global" />
                <Button  value="/" className="global" />
            </div>
            <div className='third-row'>
                <Button  value="4" className="global" />
                <Button  value="5" className="global" />
                <Button  value="6" className="global" />
                <Button  value="*" className="global" />
            </div>
            <div className='fourth-row'>
                <Button  value="1" className="global" />
                <Button  value="2" className="global" />
                <Button  value="3" className="global" />
                <Button  value="-" className="global" />
            </div>
            <div className='conflict'>
                <div className='left'>
                    <Button value="0" className=" big" />
                    <Button value="." className="small" />
                    <Button value="Del" onClick={handleDelButton} className="red small white-text top-margin" />
                    <Button value="=" onClick={handleEqualToButton} className="green white-text big top-margin" />
                </div>
                <div className='right'>
                    <Button value="+" className="global grey plus" />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.expression.result,
        expression: state.expression.expression,
        pressedEqualToButton: state.expression.pressedEqualToButton
    }
}



export default connect(mapStateToProps)(App);