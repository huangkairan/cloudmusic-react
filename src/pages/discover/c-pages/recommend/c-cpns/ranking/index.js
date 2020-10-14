import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import KBTopRanking from "@/components/top-ranking";
import { KBRankingWrapper } from "./style";
import { getTopRankingAction } from "../../store/actions";
export default memo(function KBRanking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRankingAction(0));
    dispatch(getTopRankingAction(2));
    dispatch(getTopRankingAction(3));
  }, [dispatch]);
  const { topRankings, newRankings, originRankings } = useSelector(
    (state) => ({
      topRankings: state.getIn(["recommend", "topRankings"]),
      newRankings: state.getIn(["recommend", "newRankings"]),
      originRankings: state.getIn(["recommend", "originRankings"]),
    }),
    shallowEqual
  );
  return (
    <KBRankingWrapper>
      <KBThemeHeaderRCM title="榜单" />
      <div className="tops">
        <KBTopRanking info={topRankings} />
        <KBTopRanking info={newRankings} />
        <KBTopRanking info={originRankings} />
      </div>
    </KBRankingWrapper>
  );
});
