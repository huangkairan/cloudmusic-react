import KBDiscover from "@/pages/discover";
import KBMine from "@/pages/mine";
import KBFriend from "@/pages/friend";
const routes = [
  {
    path: "/",
    exact: true,
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
