import {RECEIVE_LIST} from './const';

export function receiveList(json) {
    return {
        type: RECEIVE_LIST,
        data: json
    }
}
