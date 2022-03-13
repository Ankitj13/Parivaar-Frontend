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
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Home</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active"></li>
                </ol>
              </div>
            </div>

            <div className="row mb-2">
            <div className="col-sm-12">
              <div className="timeline-item">
                <span className="time">
                <strong>Id:</strong> {currentUser.employee.id}
                </span>
                <h5 className="timeline-header">
                  <strong>Email:</strong> {currentUser.employee.email}
                </h5>
{/* <div className="timeline-body">
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
