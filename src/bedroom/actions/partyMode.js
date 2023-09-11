const { bedroomActionCreators } = require("./actionCreator");

const partyMode = () => (dispatch) => {
  dispatch(bedroomActionCreators.setAlarmTime("13:00"));
  dispatch(bedroomActionCreators.setBedroomLighting("strobe"));
};

module.exports = { partyMode };
