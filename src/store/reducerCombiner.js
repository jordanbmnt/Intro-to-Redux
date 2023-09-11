const { combineReducers } = require("redux");
const { bedroomReducer } = require("../bedroom/reducer/bedroomReducer");
const { loungeReducer } = require("../lounge/reducer/loungeReducer");
const { outsideReducer } = require("../outside/reducer/outsideReducer");

const reducer = combineReducers({
  bedroomReducer,
  loungeReducer,
  outsideReducer,
});

module.exports = { reducer };
