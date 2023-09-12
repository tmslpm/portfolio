import { createRouter, createWebHashHistory } from "vue-router";

export type RouteType = {
  path: string;
  name: string;
  hidden: boolean;
  component: () => {};
};

export type RoutesType = {
  home: RouteType; 
  not_found: RouteType;
};

export const generateRouter = () => {
  const r = [];
  for (let item in Routes) { r.push(Routes[item]) }
  return createRouter({
    history: createWebHashHistory(),
    routes: r,
  });
}
 
export const Routes: RoutesType = {
  //- - - - - - - - - - -
  // Home
  home: {
    path: "/",
    name: "Home",
    hidden: false,
    component: () => import("../views/Home.vue"),
  },
 
 
  /////////////////////////////////////////////////////////
  // Hidden
   
  //- - - - - - - - - - -
  // Not Found 
  not_found: {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    hidden: true,
    component: () => import("../router/NotFound.vue"),
  }
}
