const { bedroomActionType } = require("./actionType");

const bedroomActionCreators = {
  setAlarmTime: (payload) => ({
    type: bedroomActionType.SET_ALARM_TIME,
    alarmTime: payload,
  }),
  setAlarmOn: () => ({
    type: bedroomActionType.SET_ALARM_ON,
  }),
  setBedroomLighting: (payload) => ({
    type: bedroomActionType.SET_BEDROOM_LIGHTING,
    bedroomLighting: payload,
  }),
};

module.exports = { bedroomActionCreators };
