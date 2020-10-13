import React, { memo } from "react";
import { HotRecommendWrapper } from "./style";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
export default memo(function KBHotRecommend() {
  return (
    <HotRecommendWrapper>
      <KBThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
    </HotRecommendWrapper>
  );
});
