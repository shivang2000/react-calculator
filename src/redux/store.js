import { combineReducers, createStore } from "redux";
import expressionReducer from "./reducers/expressionReducer";

export default createStore(combineReducers({
    expression: expressionReducer ,
}))