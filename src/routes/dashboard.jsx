
import Dashboard from "views/Dashboard/Dashboard";
import CrearProducto from "views/UserProfile/CrearProducto";
import EditarProducto from "views/UserProfile/EditarProducto";

import EliminarProducto from "views/UserProfile/EliminarProducto";

import TableList from "views/TableList/TableList";

import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [ 
   {
    path: "/table",
    name: "Todos los productos",
    icon: "pe-7s-note2",
    component: TableList
  },

  {
    path: "/create",
    name: "Crear nuevo Producto",
    icon: "pe-7s-plus",
    component: CrearProducto
  },

  {
    path: "/edit",
    name: "Editar Producto",
    icon: "pe-7s-edit",
    component: EditarProducto
  },

 {
    path: "/delete",
    name: "Eliminar un Producto",
    icon: "pe-7s-trash",
    component: EliminarProducto
  },

    /*,
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },*/
  /*{
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade
  },*/



  { redirect: true, path: "/", to: "/table", name: "table" }
];

export default dashboardRoutes;
