import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "./router";

import KBAppHeader from "components/app-header";
import KBAppFooter from "components/app-footer";
import { HashRouter } from "react-router-dom";
import store from "./store";
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
          <KBAppHeader />
          {renderRoutes(routes)}
          <KBAppFooter />
        </HashRouter>
    </Provider>
  );
});
