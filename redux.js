const redux = require('redux');
const createStore = redux.createStore;

const init = {
    value: 0,
    age: 2
}

// reducer
const rootReducer = (state = init, action) => {
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());