import React, { memo } from "react";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import { KBNewAlbumWrapper } from "./style";
export default memo(function KBNewAlbum() {
  return (
    <KBNewAlbumWrapper>
      <KBThemeHeaderRCM title="新碟上架" />
    </KBNewAlbumWrapper>
  );
});
