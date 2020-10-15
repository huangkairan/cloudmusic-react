import React, { memo } from "react";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import KBNewAlbum from "./c-cpns/new-album";
import KBRanking from "./c-cpns/ranking";
import KBUserLogin from "./c-cpns/user-login";
import KBSettleSinger from "./c-cpns/settle-singer";
import KBHotAnchor from "./c-cpns/hot-anchor";
function KBRecommend(props) {

    return (
      <RecommendWrapper>
        <TopBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
            <HotRecommend />
            <KBNewAlbum />
            <KBRanking />
          </RecommendLeft>
          <RecommendRight>
            <KBUserLogin />
            <KBSettleSinger />
            <KBHotAnchor />
          </RecommendRight>
        </Content>
      </RecommendWrapper>
    );
}

export default memo(KBRecommend);