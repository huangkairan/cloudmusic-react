import * as actionTypes from "./constants";
import { Map } from "immutable";
const defaultStore = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topRankings: [],
  newRankings: [],
  originRankings: [],
});
function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      //引入immutable后的操作方式
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_TOP_RANKINGS:
      return state.set("topRankings", action.topRankings);
    case actionTypes.CHANGE_NEW_RANKINGS:
      return state.set("newRankings", action.newRankings);
    case actionTypes.CHANGE_ORIGIN_RANKINGS:
      return state.set("originRankings", action.originRankings);
    default:
      return state;
  }
}
export default reducer;
