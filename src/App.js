import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import KBAppHeader from "components/app-header";
import KBAppFooter from "components/app-footer";
import { HashRouter } from "react-router-dom";

export default memo(function App() {
  return (
    <HashRouter>
      <KBAppHeader />
      {renderRoutes(routes)}
      <KBAppFooter />
    </HashRouter>
  );
});
