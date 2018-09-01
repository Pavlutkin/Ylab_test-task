import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import List from "./containers/List/List";
import {configureStore} from '../src/store/confStore';
//import './style/index.less';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>,
    document.getElementById("root"));