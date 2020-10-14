import React, { memo } from "react";
import { AlbumWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
export default memo(function KBAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt=""></img>
        <a href="todo" className="cover image_cover">
          album
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
