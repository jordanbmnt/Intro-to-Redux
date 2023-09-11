const { outsideActionType } = require("../actions/actionType");

const initialOutsideState = {
  outsideLighting: "off",
  sprinklersOn: false,
  gateOpen: true,
};

const outsideReducer = (state = initialOutsideState, action) => {
  switch (action.type) {
    case outsideActionType.SET_OUTSIDE_LIGHTING:
      return {
        ...state,
        outsideLighting: action.outsideLighting,
      };
    case outsideActionType.SET_SPRINKLERS_ON:
      return {
        ...state,
        sprinklersOn: !state.sprinklersOn,
      };
    case outsideActionType.SET_GATE_OPEN:
      return {
        ...state,
        gateOpen: !state.gateOpen,
      };
    default:
      return state;
  }
};

module.exports = { outsideReducer };
