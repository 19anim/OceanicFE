/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import PlaceOrder from "./views/PlaceOrder";
import ViewResult from "./views/ViewResult";
import Homepage from "views/Homepage";
import RoutesList from "views/RoutesList";
import Guidelines from "views/Guidelines";
import CreateUser from "views/CreateUser";
import UserList from "./views/UserList";
import Login from "./views/Login";
var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/createUser",
    name: "Create User",
    icon: "nc-icon nc-badge",
    component: CreateUser,
    layout: "/admin",
      invisible: true
  },
    {
        path: "/viewuserlist",
        name: "User List",
        icon: "nc-icon nc-badge",
        component: UserList,
        layout: "/admin",

    },
  {

    path: "/placeorder",
    name: "Place Order",
    icon: "nc-icon nc-spaceship",
    component: PlaceOrder,
    layout: "/admin",
      invisible: true
  },
    {
        path: "/homepage",
        name: "Booking",
        icon: "nc-icon nc-map-big",
        component: Homepage,
        layout: "/admin",
    },
    {

        path: "/viewresult",
        name: "View detail",
        icon: "nc-icon nc-spaceship",
        component: ViewResult,
        layout: "/admin",
        invisible: true
    },
  {
    path: "/guideline",
    name: "Guidelines",
    icon: "nc-paper nc-bank",
    component: Guidelines,
    layout: "/admin",
  },
    {
        path: "/login",
        name: "Guidelines",
        icon: "nc-paper nc-bank",
        component: Login,
        layout: "/auth",
    },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-badge",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
