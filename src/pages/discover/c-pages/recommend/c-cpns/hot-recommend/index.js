import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HotRecommendWrapper } from "./style";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";

import { getHotRecommendAction } from "../../store/actions";
export default memo(function KBHotRecommend() {
  //state
  //redux hooks
  const dispatch = useDispatch();

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
    </HotRecommendWrapper>
  );
});
