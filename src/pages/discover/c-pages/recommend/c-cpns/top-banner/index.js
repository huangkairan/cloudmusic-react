import React, { memo, useEffect ,useRef} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "../../store/actions";
import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
export default memo(function KBTopBanner() {
  //组件和redux关联：1获取数据 2进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners,
      //使用immutable和redux-immutable之后操作方式
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerRef = useRef();
  //旧的操作
  // const { getBanners } = props;
  //   useEffect(() => {
  //     getBanners();
  //   }, [getBanners]);
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel 
          effect="fade" 
          autoplay="true" 
          ref={bannerRef}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key="item.imageUrl">
                  <img src={item.imageUrl} alt=""  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
