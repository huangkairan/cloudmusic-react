import * as actionTypes from "./constants";
import { Map } from "immutable";
const defaultStore = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});;
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
    default:
      return state;
  }
}
export default reducer;
