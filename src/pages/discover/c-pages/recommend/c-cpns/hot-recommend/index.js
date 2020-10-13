import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";

import { getHotRecommendAction } from "../../store/actions";
export default memo(function KBHotRecommend() {
  //state
  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <KBThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
