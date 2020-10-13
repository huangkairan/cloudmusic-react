import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "./store/actions";
function KBRecommend(props) {
  //组件和redux关联：1获取数据 2进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners,
      //使用immutable和redux-immutable之后操作方式
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  //旧的操作
  // const { getBanners } = props;
  //   useEffect(() => {
  //     getBanners();
  //   }, [getBanners]);
    return <div>
      {topBanners.length}
    </div>;
}

export default memo(KBRecommend);
//旧的操作
// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(memo(KBRecommend));