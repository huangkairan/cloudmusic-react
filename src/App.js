import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import routes from "./router";
import store from "./store";
import KBAppHeader from "components/app-header";
import KBAppFooter from "components/app-footer";
import KBAppPlayerBar from "@/pages/player/app-player-bar";
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <KBAppHeader />
        {renderRoutes(routes)}
        <KBAppFooter />
        <KBAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
