import { Component } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Account/Login/Login";
import SignUp from "./components/Account/SignUp/SignUp"
import HrDesk from "./components/Hr_Desk/HrDesk";
import Addnews from "./components/Hr_Desk/Addnews";
import Crudnews from "./components/Hr_Desk/Crudnews";


class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/hr" component={HrDesk} />
          <Route exact path="/hr/addnewnews" component={Addnews} />
          <Route exact path="/hr/:id" component={Crudnews} />
        </Switch>
      </>
    );
  }
}

export default App;
