const redux = require("redux");
const { reducer } = require("./reducerCombiner");
const { default: thunk } = require("redux-thunk");
const createStore = redux.createStore;

const store = createStore(reducer, redux.applyMiddleware(thunk));

module.exports = { store };
