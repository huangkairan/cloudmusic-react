import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function KBAppHeader() {
  return (
    <div>
      <h2>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/mine">我的音乐</NavLink>
        <NavLink to="/friend">朋友</NavLink>
      </h2>
    </div>
  );
});
