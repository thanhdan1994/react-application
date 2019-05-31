import {createStore} from 'redux';

var defaultState = {
    status: false,
    sort: {
        by: "name",
        value: 1,
    }
};

var myReducer = (state = defaultState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    return state;
}
const store = createStore(myReducer);
console.log(store.getState())
var action = {type : 'TOGGLE_STATUS'}
store.dispatch(action)
console.log(store.getState())
