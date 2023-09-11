const { store } = require("./store/store");
const { outsideActionCreators } = require("./outside/actions/actionCreator");
const { loungeActionCreators } = require("./lounge/actions/actionCreator");
const { bedroomActionCreators } = require("./bedroom/actions/actionCreator");
const { partyMode } = require("./bedroom/actions/partyMode");
const { theatreMode } = require("./lounge/actions/theatreMode");
const { sleepMode } = require("./outside/actions/sleepMode");

const unsubscribe = store.subscribe(() => {
  console.log("subscribe", store.getState());
});

store.dispatch(loungeActionCreators.setTvOn());
store.dispatch(
  loungeActionCreators.setNowPlayingVideo("https://youtu.be/jwqBnhNKUoo")
);
store.dispatch(loungeActionCreators.setLoungeLighting("off"));
store.dispatch(bedroomActionCreators.setBedroomLighting("strobe"));
store.dispatch(bedroomActionCreators.setAlarmTime("17:00"));
store.dispatch(loungeActionCreators.setTvVolume(15));
store.dispatch(bedroomActionCreators.setAlarmOn());
store.dispatch(outsideActionCreators.setGateOpen());
store.dispatch(outsideActionCreators.setSprinklersOn());
store.dispatch(outsideActionCreators.setOutsideLighting("strobe"));
store.dispatch(loungeActionCreators.setCurtainsOpen());
store.dispatch(partyMode());
store.dispatch(theatreMode());
store.dispatch(sleepMode());
unsubscribe();
