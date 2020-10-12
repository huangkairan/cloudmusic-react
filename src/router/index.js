import React from "react";
import KBDiscover from "@/pages/discover";
import KBMine from "@/pages/mine";
import KBFriend from "@/pages/friend";
import { Redirect } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: KBDiscover,
  },
  {
    path: "/mine",
    component: KBMine,
  },
  {
    path: "/friend",
    component: KBFriend,
  },
];

export default routes;
