import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";
import KBThemeHeaderRCM from "@/components/theme-header-rcm";
import KBAlbumCover from "@/components/album-cover";
import { KBNewAlbumWrapper } from "./style";
import { getNewAlbumAction } from "../../store/actions";
export default memo(function KBNewAlbum() {
  const albumRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  return (
    <KBNewAlbumWrapper>
      <KBThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => albumRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel dot={false} ref={albumRef}>
            {[0, 1].map((item) => {
              return <div className="page" key={item}>
                {
                  newAlbums.slice(item*5,(item+1)*5).map((data,index)=>{
                  return (
                    <KBAlbumCover
                      key={data.id}
                      info={data}
                      size={100}
                      width={118}
                      bgp={"-570px"}
                    />
                  );
                })
                }
              </div>;
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => albumRef.current.next()}
        ></div>
      </div>
    </KBNewAlbumWrapper>
  );
});
