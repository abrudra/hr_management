import AppBar from "./components/AppBar/AppBar";
import routes from "./components/Router/Router";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";




const AuthRoute = ({ component: Component, title, ...rest }) => {
  const token = localStorage.getItem("loggedInUser");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <>
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          </>
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
          <Switch>
            {routes.map((route) =>
              route.authRequired ? (
                <AuthRoute
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              ) : (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              )
            )}
          </Switch>
      </Router>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <>
//         <AppBar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={SignUp} />
//           <Route exact path="/hr" component={HrDesk} />
//           <Route exact path="/hr/addnewnews" component={Addnews} />
//           <Route exact path="/hr/:id" component={Crudnews} />
//         </Switch>
//       </>
//     );
//   }
// }

// export default App;
