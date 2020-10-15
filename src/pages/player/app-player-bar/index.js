import React, { memo } from "react";
import { PlaybarWrapper, Control } from "./style";
export default memo(function KBAppPlayerBar() {
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content"></div>
    </PlaybarWrapper>
  );
});
