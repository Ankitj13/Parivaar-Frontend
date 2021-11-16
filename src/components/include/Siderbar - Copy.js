import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Siderbar() {
  return (<>
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
              <NavLink to="" class="brand-link">
                <img
                  src="dist/img/AdminLTELogo.png"
                  alt="Parivar Health"
                  class="brand-image img-circle elevation-3"
                  style={{ opacity: 0.8 }}
                />
                <span class="brand-text font-weight-light">Parivar Health</span>
              </NavLink>
    
              <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div class="image">
                    <img
                      src="dist/img/user2-160x160.jpg"
                      class="img-circle elevation-2"
                      alt="User Image"
                    />
                  </div>
                  <div class="info">
                    <a href="#" class="d-block">
                      Admin
                    </a>
                  </div>
                </div>
    
    
                <nav class="mt-2">
                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item">
                      <NavLink
                        activeclass="active"
                        exact
                        to="/"
                        class="nav-link "
                      >
                          <img
                  src="dist/img/side-menu/home.png"
                  class="side-menu-icone"
              alt="home"
                />
 
                        <div class="sidebar-menu"><span class="side-menu-text">Home</span></div>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        activeclass="active"
                        exact
                        to="/beneficiary"
                        class="nav-link"
                      >
                       <img
                  src="dist/img/side-menu/beneficiary.png"
                  class="side-menu-icone"
                 alt="beneficiary"
                />
                       <div class="sidebar-menu"><span class="side-menu-text">Beneficiary</span></div>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        activeclass="active"
                        exact
                        to="/report"
                        class="nav-link"
                      >
                       <img
                  src="dist/img/side-menu/report.png"
                  class="side-menu-icone"
                 alt="report"
                />
                       <div class="sidebar-menu"><span class="side-menu-text">Report</span></div>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        activeclass="active"
                        exact
                        to="/add"
                        class="nav-link"
                      >
                       <img
                  src="dist/img/side-menu/add.png"
                  class="side-menu-icone"
                 alt="add"
                />
                        <div class="sidebar-menu"><span class="side-menu-text">Add</span></div>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        activeclass="active"
                        exact
                        to="/about"
                        class="nav-link"
                      >
                       <img
                  src="dist/img/side-menu/about.png"
                  class="side-menu-icone"
                  alt="about"
                />
                        <div class="sidebar-menu"><span class="side-menu-text">About</span></div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
            <div id="sidebar-overlay"></div>
</>
        );
      }

export default Siderbar
