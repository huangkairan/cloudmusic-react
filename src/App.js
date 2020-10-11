import React, { memo } from "react";
import KBAppHeader from "components/app-header";
import KBAppFooter from "components/app-footer";

export default memo(function App() {
  return (
    <div>
      <KBAppHeader />
      <h3>content</h3>
      <KBAppFooter />
    </div>
  );
});
