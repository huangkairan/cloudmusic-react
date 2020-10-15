import React, { memo } from "react";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
export default memo(function KBPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
          <PlayerLeft className="player-left">
            <h3>player-info</h3>
            <h3>song-content</h3>
          </PlayerLeft>
          <PlayerRight className="player-right">
          <h3>simi playlist</h3>
          <h3>simi song</h3>
          </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
