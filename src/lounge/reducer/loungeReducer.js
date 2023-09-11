const { loungeActionType } = require("../actions/actionTypes");

const initialLoungeState = {
  tvOn: false,
  tvVolume: 10,
  loungeLighting: "dim",
  nowPlayingVideo: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  curtainsOpen: false,
};

const loungeReducer = (state = initialLoungeState, action) => {
  switch (action.type) {
    case loungeActionType.SET_TV_ON:
      return {
        ...state,
        tvOn: !state.tvOn,
      };
    case loungeActionType.SET_TV_VOLUME:
      return {
        ...state,
        tvVolume: action.tvVolume,
      };
    case loungeActionType.SET_LOUNGE_LIGHTING:
      return {
        ...state,
        loungeLighting: action.loungeLighting,
      };
    case loungeActionType.SET_NOW_PLAYING_VIDEO:
      return {
        ...state,
        nowPlayingVideo: action.videoLink,
      };
    case loungeActionType.SET_CURTAINS_OPEN:
      return {
        ...state,
        curtainsOpen: !state.curtainsOpen,
      };
    default:
      return state;
  }
};

module.exports = { loungeReducer };
