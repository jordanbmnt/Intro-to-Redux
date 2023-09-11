const { bedroomActionType } = require("../actions/actionType");

const initialBedroomState = {
  bedroomLighting: "off",
  alarmTime: "07:00",
  alarmOn: false,
};

const bedroomReducer = (state = initialBedroomState, action) => {
  switch (action.type) {
    case bedroomActionType.SET_BEDROOM_LIGHTING:
      return {
        ...state,
        bedroomLighting: action.bedroomLighting,
      };
    case bedroomActionType.SET_ALARM_TIME:
      return {
        ...state,
        alarmTime: action.alarmTime,
      };
    case bedroomActionType.SET_ALARM_ON:
      return {
        ...state,
        alarmOn: !state.alarmOn,
      };
    default:
      return state;
  }
};

module.exports = { bedroomReducer };
