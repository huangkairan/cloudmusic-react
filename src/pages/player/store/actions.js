import * as actionTypes from "./constants";
import { getSongDetail } from "@/services/player";
import { getRandom } from "@/utils/math-utils";
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRNET_SONG,
  currentSong,
});
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});
export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const playList = getState().getIn(["player", "playList"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    //1.判断播放方式
    switch (sequence) {
      case 1: //随机播放
        let randomIndex = getRandom(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandom(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        //顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  };
};
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    //1.根据id查找playlist中是否有该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);
    //2.判断是否找到歌曲
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        //1.将最新请求到的歌曲添加到播放列表内
        const newPlayList = [...playList];
        newPlayList.push(song);
        //2.更新redux
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
