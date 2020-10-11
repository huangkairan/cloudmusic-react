import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import KBAppHeader from "components/app-header";
import KBAppFooter from "components/app-footer";

export default memo(function App() {
  return (
    <div>
      <KBAppHeader />
      {renderRoutes(routes)}
      <KBAppFooter />
    </div>
  );
});
