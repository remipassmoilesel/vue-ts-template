import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import {HomeComponent} from "./components/home";
import {AboutComponent} from "./components/about";
import {ListComponent} from "./components/list";

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/list',
    component: ListComponent
  }
];

export const createRouter = () => new VueRouter({mode: 'history', routes: createRoutes()});
