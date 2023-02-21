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

