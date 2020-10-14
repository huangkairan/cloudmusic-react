import * as actionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopRanking,
} from "@/services/recommend";
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});
const changeTopRankingAction = (res) => ({
  type: actionTypes.CHANGE_TOP_RANKINGS,
  topRankings: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKINGS,
  newRankings: res.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKINGS,
  originRankings: res.playlist,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => dispatch(changeTopBannerAction(res)));
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) =>
      dispatch(changeHotRecommendAction(res))
    );
  };
};
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => dispatch(changeNewAlbumAction(res)));
  };
};

export const getTopRankingAction = (idx) => {
  return (dispatch) => {
    switch (idx) {
      case 0:
        getTopRanking(idx).then((res) => dispatch(changeTopRankingAction(res)));
        break;
      case 2:
        getTopRanking(idx).then((res) => dispatch(changeNewRankingAction(res)));
        break;
      case 3:
        getTopRanking(idx).then((res) =>
          dispatch(changeOriginRankingAction(res))
        );
        break;
      default:
    }
  };
};