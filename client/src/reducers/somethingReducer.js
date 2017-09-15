import { types } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case types.FETCH_SOMETHING1:
            return action.payload || false;
        default:
            return state;
    }
}
