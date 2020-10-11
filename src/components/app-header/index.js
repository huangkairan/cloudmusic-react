import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function KBAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <NavLink to="/"></NavLink>
        </HeaderLeft>
        <HeaderRight>
          <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
          <NavLink to="/friend">朋友</NavLink>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
