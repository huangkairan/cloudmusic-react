import React, { memo } from "react";

import TopBanner from "./c-cpns/top-banner";
function KBRecommend(props) {

    return (
      <div>
        <TopBanner />
      </div>
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