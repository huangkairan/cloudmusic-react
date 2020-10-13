import React, { memo } from "react";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import { KBRankingWrapper } from "./style";
export default memo(function KBRanking() {
  return (
    <KBRankingWrapper>
      <KBThemeHeaderRCM title="榜单" />
    </KBRankingWrapper>
  );
});
