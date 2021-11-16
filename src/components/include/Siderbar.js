import React, { useState, useEffect }from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../actions/message";

import { history } from "../../helpers/history";

function Siderbar() {
  const [ShowUserBoard, setShowUserBoard] = useState(false);
  const [ShowOpreratorBoard, setShowOpreratorBoard] = useState(false);
  const [ShowAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowUserBoard(currentUser.employee.roles.includes("USER"));
      setShowOpreratorBoard(currentUser.employee.roles.includes("OPERATOR"));
      setShowAdminBoard(currentUser.employee.roles.includes("ADMIN"));
    
    }
  }, [currentUser]);

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <NavLink to="" className="nav-link">
          <img
              src="../../dist/img/logo.png"
              alt="Parivaar Health Logo"
              className="side-menu-logo"
            />
        </NavLink>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
            >
              <li className="nav-item">
                <NavLink
                  activeclass="active"
                  exact
                  to="/home"
                
                  className="nav-link "
                >

                  <img
                    src="dist/img/side-menu/home.png"
                    className="side-menu-icone"
                    alt="home"
                  />

                  <div className="sidebar-menu">
                    <span className="side-menu-text">Home</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclass="active"
                  exact
                  to="/beneficiary"
                  className="nav-link"
                >
                  <img
                    src="dist/img/side-menu/beneficiary.png"
                    className="side-menu-icone"
                    alt="beneficiary"
                  />
                  <div className="sidebar-menu">
                    <span className="side-menu-text">Beneficiary</span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclass="active"
                  exact
                  to="/report"
                  className="nav-link"
                >
                  <img
                    src="dist/img/side-menu/report.png"
                    className="side-menu-icone"
                    alt="report"
                  />
                  <div className="sidebar-menu">
                    <span className="side-menu-text">Report</span>
                  </div>
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                  activeclass="active"
                  exact
                  to="/add"
                  className="nav-link"
                >
                  <img
                    src="dist/img/side-menu/add.png"
                    className="side-menu-icone"
                    alt="add"
                  />
                  <div className="sidebar-menu">
                    <span className="side-menu-text">Add</span>
                  </div>
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink
                  activeclass="active"
                  exact
                  to="/about"
                  className="nav-link"
                >
                  <img
                    src="dist/img/side-menu/about.png"
                    className="side-menu-icone"
                    alt="about"
                  />
                  <div className="sidebar-menu">
                    <span className="side-menu-text">About</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Siderbar;
