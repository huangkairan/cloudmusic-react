import * as actionTypes from "./constants";
import { getSongDetail } from "@/services/player";

const changeCurrentSong = (currentSong) => ({
  type: actionTypes.CHANGE_CURRNET_SONG,
  currentSong,
});
export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => dispatch(changeCurrentSong(res.songs[0])));
  };
};
