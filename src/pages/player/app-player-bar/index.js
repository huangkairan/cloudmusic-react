import React, { memo } from "react";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";
export default memo(function KBAppPlayerBar() {
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">在一起嘛好不好</span>
              <a href="#/" className="singer-name">
                李荣浩
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:13</span>
                <span className="divider">/</span>
                <span className="duration">03:45</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});
