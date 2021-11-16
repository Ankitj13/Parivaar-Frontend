import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Home</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item active"></li>
                </ol>
              </div>
            </div>

            <div class="row mb-2">
            <div class="col-sm-12">
              <div class="timeline-item">
                <span class="time">
                <strong>Id:</strong> {currentUser.employee.id}
                </span>
                <h5 class="timeline-header">
                  <strong>Email:</strong> {currentUser.employee.email}
                </h5>
{/* <div class="timeline-body">
                  <strong>Token:</strong> 
                   {currentUser.token.substring(0, 40)} ...{" "}
                  {currentUser.token.substr(
                    currentUser.token.length - 40
                  )}
                 </div> */}
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
