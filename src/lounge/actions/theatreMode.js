const { store } = require("../../store/store");
const { loungeActionCreators } = require("./actionCreator");

const theatreMode = () => (dispatch) => {
  dispatch(loungeActionCreators.setLoungeLighting("dim"));
  if (!store.getState().loungeReducer.tvOn)
    dispatch(loungeActionCreators.setTvOn());
  if (store.getState().loungeReducer.curtainsOpen)
    dispatch(loungeActionCreators.setCurtainsOpen());
  dispatch(loungeActionCreators.setTvVolume(90));
  dispatch(
    loungeActionCreators.setNowPlayingVideo(
      "https://www.netflix.com/us/title/80987903?s=a&trkid=13747225&t=cp&vlang=en&clip=81571821"
    )
  );
};

module.exports = { theatreMode };
