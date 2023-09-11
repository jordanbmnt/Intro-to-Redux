const { loungeActionType } = require("./actionTypes");

const loungeActionCreators = {
  setLoungeLighting: (payload) => ({
    type: loungeActionType.SET_LOUNGE_LIGHTING,
    loungeLighting: payload,
  }),
  setNowPlayingVideo: (payload) => ({
    type: loungeActionType.SET_NOW_PLAYING_VIDEO,
    videoLink: payload,
  }),
  setTvOn: () => ({
    type: loungeActionType.SET_TV_ON,
  }),
  setTvVolume: (payload) => ({
    type: loungeActionType.SET_TV_VOLUME,
    tvVolume: payload,
  }),
  setCurtainsOpen: () => ({
    type: loungeActionType.SET_CURTAINS_OPEN,
  }),
};

module.exports = { loungeActionCreators };
