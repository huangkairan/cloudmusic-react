import React, { memo } from "react";
import { RecommendWrapper } from "./style";
import TopBanner from "./c-cpns/top-banner";
function KBRecommend(props) {

    return (
      <RecommendWrapper>
        <TopBanner />
      </RecommendWrapper>
    );
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