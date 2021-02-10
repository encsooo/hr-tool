import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import Home from "../components/Home";
import Login from "../components/Login";
import Admin from "../components/Admin";
import NotFound404 from "../components/NotFound404";

const Routes = () => {
  const isAuthenticated = useSelector(state => state)
  return (
    <main>
      <Router>
        <Switch>
          <Home path="/" exact component={Home} />
          {!isAuthenticated && <Route path="/login" component={Login} />}
           <Route path="/admin" component={Admin} />
          <Route path="/notFound404" component={NotFound404} />
        </Switch>
      </Router>
    </main>
  );
};

export default Routes;
