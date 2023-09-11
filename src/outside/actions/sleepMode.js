const { store } = require("../../store/store");
const { outsideActionCreators } = require("./actionCreator");

const sleepMode = () => (dispatch) => {
  dispatch(outsideActionCreators.setOutsideLighting("Motion-Detect"));
  if (store.getState().outsideReducer.gateOpen)
    dispatch(outsideActionCreators.setGateOpen());
  if (!store.getState().outsideReducer.sprinklersOn)
    dispatch(outsideActionCreators.setSprinklersOn());
};

module.exports = { sleepMode };
