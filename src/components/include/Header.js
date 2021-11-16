import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/auth";

function Header() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <img
              src="dist/img/side-menu/bell.png"
              className="img-size-32"
              alt="home"
            />
            <span class="badge badge-primary navbar-badge">0</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            data-toggle="dropdown"
            role="button"
          >
            <img
              src="dist/img/user1-128x128.jpg"
              alt="User Avatar"
              class="img-size-32 mr-3 img-circle"
            />
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <div class=" card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    src="../../dist/img/user4-128x128.jpg"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">
                  {currentUser.employee.name}
                </h3>

                <p class="text-muted text-center">
                  {currentUser.employee.email}
                </p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Mobile</b>{" "}
                    <a class="float-right">
                      +91 {currentUser.employee.mobileno}
                    </a>
                  </li>
                </ul>

                <a
                  href="/login"
                  class="btn btn-primary btn-block"
                  onClick={logOut}
                >
                  <b>Log Out</b>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
