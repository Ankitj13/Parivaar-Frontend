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
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <img
              src="dist/img/side-menu/bell.png"
              className="img-size-32"
              alt="home"
            />
            <span className="badge badge-primary navbar-badge">0</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            data-toggle="dropdown"
            role="button"
          >
            <img
              src="dist/img/user1-128x128.jpg"
              alt="User Avatar"
              className="img-size-32 mr-3 img-circle"
            />
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <div className=" card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img
                    className="profile-user-img img-fluid img-circle"
                    src="../../dist/img/user4-128x128.jpg"
                    alt="User profile picture"
                  />
                </div>

                <h3 className="profile-username text-center">
                  {currentUser.employee.name}
                </h3>

                <p className="text-muted text-center">
                  {currentUser.employee.email}
                </p>

                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Mobile</b>{" "}
                    <a className="float-right">
                      +91 {currentUser.employee.mobileno}
                    </a>
                  </li>
                </ul>

                <a
                  href="/login"
                  className="btn btn-primary btn-block"
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
