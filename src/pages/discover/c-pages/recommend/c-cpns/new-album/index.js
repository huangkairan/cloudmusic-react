import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import { KBNewAlbumWrapper } from "./style";
import { getNewAlbumAction } from "../../store/actions";
export default memo(function KBNewAlbum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"]),
  }));
  return (
    <KBNewAlbumWrapper>
      <KBThemeHeaderRCM title="新碟上架" />
      <div>
        {newAlbums.map((item, index) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </KBNewAlbumWrapper>
  );
});
