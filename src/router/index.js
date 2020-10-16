import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
// import KBDiscover from "@/pages/discover";
// import KBMine from "@/pages/mine";
// import KBFriend from "@/pages/friend";
// import KBRecommend from "@/pages/discover/c-pages/recommend";
// import KBRanking from "@/pages/discover/c-pages/ranking";
// import KBSongs from "@/pages/discover/c-pages/songs";
// import KBDjradio from "@/pages/discover/c-pages/djradio";
// import KBArtist from "@/pages/discover/c-pages/artist";
// import KBAlbum from "@/pages/discover/c-pages/album";
// import KBPlayer from "@/pages/player";

const KBDiscover = lazy(()=>import("@/pages/discover"))
const KBMine= lazy(_=>import("@/pages/mine"))
const KBFriend= lazy(_=>import("@/pages/friend"))
const KBRecommend= lazy(_=>import("@/pages/discover/c-pages/recommend"))
const KBRanking= lazy(_=>import("@/pages/discover/c-pages/ranking"))
const KBSongs= lazy(_=>import("@/pages/discover/c-pages/songs"))
const KBDjradio= lazy(_=>import("@/pages/discover/c-pages/djradio"))
const KBArtist= lazy(_=>import("@/pages/discover/c-pages/artist"))
const KBAlbum= lazy(_=>import("@/pages/discover/c-pages/album"))
const KBPlayer= lazy(_=>import("@/pages/player"))
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: KBDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: KBRecommend,
      },
      {
        path: "/discover/ranking",
        component: KBRanking,
      },
      {
        path: "/discover/songs",
        component: KBSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: KBDjradio,
      },
      {
        path: "/discover/artist",
        component: KBArtist,
      },
      {
        path: "/discover/album",
        component: KBAlbum,
      },
      {
        path: "/discover/player",
        component: KBPlayer,
      },
    ],
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
