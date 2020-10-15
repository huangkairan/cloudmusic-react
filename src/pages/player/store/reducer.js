import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, //0循环 1随机 2单曲循环
  lyricList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRNET_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("lyricList", action.lyricList);
    default:
      return state;
  }
}
export default reducer;
