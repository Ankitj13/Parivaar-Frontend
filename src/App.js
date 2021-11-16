import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Header from "./components/include/Header";
import Siderbar from "./components/include/Siderbar";
import About from "./components/pages/About";
import Add from "./components/pages/Add";
import Beneficiary from "./components/pages/Beneficiary";
import Home from "./components/pages/Home";
import Report from "./components/pages/Report";
import BoardUser from "./components/pages/BoardUser";
import BoardModerator from "./components/pages/BoardModerator";
import BoardAdmin from "./components/pages/BoardAdmin";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import Login from "./components/pages/Login";

function App() {

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <div>
        {currentUser && (
          <>
            <Header />
            <Siderbar />
          </>
        )}
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/beneficiary" component={Beneficiary} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/about" component={About} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
