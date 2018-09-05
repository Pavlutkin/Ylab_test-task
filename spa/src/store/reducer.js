import {RECEIVE_LIST, SAVE_LIST} from './const';
import {receiveList} from './actions';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const initialState = {
    state:{
        list: []
    }
}

export function reducer(state= initialState.state, action) {
    switch (action.type) {
        case RECEIVE_LIST:
            return {
                ...state,
                list: action.data.data.list
            }
        default: return state
    }
    
};


export function getList() {
    return(dispatch) => {
            const json = require('../api/get_list.json');
            dispatch(receiveList(json));
    }
}

export function saveItem(data) {
    return (dispatch) => {
        return fetch('')
        .then(response => response.json())
        .then(json => {dispatch(receiveList(json))})
    }
}
