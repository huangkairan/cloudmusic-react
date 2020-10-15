import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";
import { getSongDetailAction } from "../store/actions";
import {
  getSizeImage,
  formatMinuteSecond,
  getPlaySong,
} from "@/utils/format-utils";
export default memo(function KBAppPlayerBar() {
  //state
  const [currentTime,  setCurrentTime] = useState(0);
  //redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  //other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(1452439191));
  }, [dispatch]);
  //other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatMinuteSecond(duration);
  //handle function
  const playMusic = () => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play();
  };
  const timeUpdate = e =>{
    setCurrentTime(e.target.currentTime*1000);
  }
  const progress = currentTime / duration * 100;
  const showCurrentTime = formatMinuteSecond(currentTime)
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlaybarWrapper>
  );
});
