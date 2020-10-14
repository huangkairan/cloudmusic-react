import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import { KBRankingWrapper } from "./style";
import { getTopRankingAction } from "../../store/actions";
export default memo(function KBRanking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRankingAction(0));
    dispatch(getTopRankingAction(2));
    dispatch(getTopRankingAction(3));
  }, [dispatch]);
  return (
    <KBRankingWrapper>
      <KBThemeHeaderRCM title="榜单" />
      <div className=""></div>
    </KBRankingWrapper>
  );
});
