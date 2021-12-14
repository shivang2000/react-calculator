import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";

import App from './components/App';
import store from './redux/store'

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>    ,
    document.querySelector('#root')
)