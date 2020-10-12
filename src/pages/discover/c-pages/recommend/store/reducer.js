import * as actionTypes from "./constants";
const defaultStore = {
  topBanners: [],
};
function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}
export default reducer;
