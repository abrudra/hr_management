import Home from "../Home/Home";
import Login from "../Account/Login/Login";
import SignUp from "../Account/SignUp/SignUp";
import HrDesk from "../Hr_Desk/HrDesk";
import Addnews from "../Hr_Desk/Addnews";
import Crudnews from "../Hr_Desk/Crudnews";

class Route {
  constructor({ path, component, title, exact = true, authRequired = true }) {
    this.path = path;
    this.component = component;
    this.title = title;
    this.exact = exact;
    this.authRequired = authRequired;
  }
}
const routes = [
  new Route({
    path: "/",
    title: "Home",
    component: Home,
    authRequired: false,
  }),
  new Route({
    path: "/login",
    title: "Login",
    component: Login,
    authRequired: false,
  }),
  new Route({
    path: "/signup",
    title: "SignUp",
    component: SignUp,
    authRequired: false,
  }),
  new Route({
    path: "/hr",
    title: "HrDesk",
    component: HrDesk,
    authRequired: true,
  }),
  new Route({
    path: "/hr/addnewnews",
    title: "AddNews",
    component: Addnews,
    authRequired: true,
  }),
  new Route({
    path: "/hr/:id",
    title: "CrudNews",
    component: Crudnews,
    authRequired: true,
  }),
];

export default routes;