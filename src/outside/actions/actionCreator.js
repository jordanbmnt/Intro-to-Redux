const { outsideActionType } = require("./actionType");

const outsideActionCreators = {
  setOutsideLighting: (payload) => ({
    type: outsideActionType.SET_OUTSIDE_LIGHTING,
    outsideLighting: payload,
  }),
  setSprinklersOn: () => ({
    type: outsideActionType.SET_SPRINKLERS_ON,
  }),
  setGateOpen: (type) => ({
    type: outsideActionType.SET_GATE_OPEN,
  }),
};

module.exports = { outsideActionCreators };
