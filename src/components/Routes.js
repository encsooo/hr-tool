import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import EmployeeRegister from "./EmployeeRegister"
import NotFound404 from "./NotFound404";

const Routes = () => {
  const isAuthenticated = useSelector(state => state)
  return (
    <main>
      <Router>
        <Switch>
          <Home path="/" exact component={Home} />
          {!isAuthenticated && <Route path="/login" component={Login} />}
           <Route path="/admin" component={Admin} />
           <Route path="/employeeRegister" component={EmployeeRegister}/>
          <Route component={NotFound404} />
        </Switch>
      </Router>
    </main>
  );
};

export default Routes;
