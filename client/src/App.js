import { Component } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";


class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
