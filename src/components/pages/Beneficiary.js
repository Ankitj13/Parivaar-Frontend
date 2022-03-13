import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BeneficiaryChildQuterlyAttendenceTable from "../common/BeneficiaryChildQuterlyAttendenceTable";
import BeneficiaryDailyAttendenceTable from "../common/BeneficiaryDailyAttendenceTable";
import BeneficiaryMotherQuterlyAttendenceTable from "../common/BeneficiaryMotherQuterlyAttendenceTable";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllChilds,
  loadAllLactacticMothers,
  loadAllMothers,
} from "../../actions/publicActions";

import AddBenegiciaryDialog from "./AddBenegiciaryDialog";
import DistrictFilter from "../include/DistrictFilter";
import BeneficiaryLactaticMotherDaily from "../common/BeneficiaryLactaticMotherDaily";
import BeneficiaryMotherDaillyAttendence from "../common/BeneficiaryMotherDaillyAttendence";
import BeneficiaryLactaticMotherQuterlyAttendenceTable from "../common/BeneficiaryLactaticMotherQuterlyAttendenceTable";
import { addChild, addMother, addLacticMother} from "../../actions/auth";

function Beneficiary() {
  let dispatch = useDispatch();

  const handleAllChilds = () => {
    dispatch(loadAllChilds());
  };

  const handleAllMothers = () => {
    dispatch(loadAllMothers());
  };
  const handleAllLactaticMothers = () => {
    dispatch(loadAllLactacticMothers());
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    dispatch(loadAllChilds());
   // console.log(dispatch(loadMembersUsers()));
  }, []);

  const saveChildChanges = (values) => {
    dispatch(addChild(values))
      .then(() => {
        setShow(false);
        dispatch(loadAllChilds());
        setSuccessful(true);
      })
      .catch((e) => {
        setSuccessful(false);
      });
  };

  const saveMotherChanges = (values) => {
    dispatch(addMother(values))
      .then(() => {
        setShow(false);
        dispatch(loadAllMothers());
        setSuccessful(true);
      })
      .catch((e) => {
        setSuccessful(false);
      });
  };

  const saveLactacticMotherChanges = (values) => {
    dispatch(addLacticMother(values))
      .then(() => {
        setShow(false);
        dispatch(loadAllLactacticMothers());
        setSuccessful(true);
      })
      .catch((e) => {
        setSuccessful(false);
      });
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Beneficiary</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <DistrictFilter />

          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="form-group"></div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-calendar-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control float-right"
                    id="reservation"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card-outline-tabs">
                <div className="card-header p-0 border-bottom-0">
                  <ul
                    className="nav nav-tabs "
                    id="custom-tabs-four-tab"
                    role="tablist"
                  >
                    <NavLink className="pt-2 px-3" to="#">
                      <i
                        className="fas fa-user-plus"
                        data-toggle="modal"
                        data-target="#modal-lg"
                        onClick={handleShow}
                      ></i>
                    </NavLink>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="custom-tabs-four-child-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-child"
                        role="tab"
                        aria-controls="custom-tabs-four-child"
                        aria-selected="true"
                        onClick={() => handleAllChilds()}
                      >
                        Child
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="custom-tabs-four-lactating-mother-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-lactating-mother"
                        role="tab"
                        aria-controls="custom-tabs-four-lactating-mother"
                        aria-selected="false"
                        onClick={() => handleAllLactaticMothers()}
                      >
                        Lactating Mother
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="custom-tabs-four-four-mother-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-mother"
                        role="tab"
                        aria-controls="custom-tabs-four-mother"
                        aria-selected="false"
                        onClick={() => handleAllMothers()}
                      >
                        Mother
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content" id="custom-tabs-four-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="custom-tabs-four-child"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-child-tab"
                  >
                    <div className="card card-primary card-outline card-outline-tabs">
                      <div className="card-header p-0">
                        <ul
                          className="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="custom-tabs-four-child-daily-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-child-daily"
                              role="tab"
                              aria-controls="custom-tabs-four-child-daily"
                              aria-selected="true"
                            >
                              Daily
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="custom-tabs-four-child-quarterly-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-child-quarterly"
                              role="tab"
                              aria-controls="custom-tabs-four-child-quarterly"
                              aria-selected="false"
                            >
                              Quarterly
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div
                          className="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="custom-tabs-four-child-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-child-daily-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryDailyAttendenceTable handleAllChilds={handleAllChilds} />
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="custom-tabs-four-child-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-child-quarterly-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryChildQuterlyAttendenceTable handleAllChilds={handleAllChilds}/>
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-four-lactating-mother"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-lactating-mother-tab"
                  >
                    <div className="card card-primary card-outline card-outline-tabs">
                      <div className="card-header p-0">
                        <ul
                          className="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="custom-tabs-four-lactating-mother-daily-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-lactating-mother-daily"
                              role="tab"
                              aria-controls="custom-tabs-four-lactating-mother-daily"
                              aria-selected="true"
                            >
                              Daily
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="custom-tabs-four-lactating-mother-quarterly-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-lactating-mother-quarterly"
                              role="tab"
                              aria-controls="custom-tabs-four-lactating-mother-quarterly"
                              aria-selected="false"
                            >
                              Quarterly
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div
                          className="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="custom-tabs-four-lactating-mother-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-lactating-mother-daily-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryLactaticMotherDaily handleAllLactaticMothers={handleAllLactaticMothers}/>
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="custom-tabs-four-lactating-mother-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-lactating-mother-quarterly-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryLactaticMotherQuterlyAttendenceTable handleAllLactaticMothers={handleAllLactaticMothers}/>
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-four-mother"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-mother-tab"
                  >
                    <div className="card card-primary card-outline card-outline-tabs">
                      <div className="card-header p-0">
                        <ul
                          className="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="custom-tabs-four-mother-daily-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-mother-daily"
                              role="tab"
                              aria-controls="custom-tabs-four-mother-daily"
                              aria-selected="true"
                            >
                              Daily
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="custom-tabs-four-mother-quarterly-tab"
                              data-toggle="pill"
                              href="#custom-tabs-four-mother-quarterly"
                              role="tab"
                              aria-controls="custom-tabs-four-mother-quarterly"
                              aria-selected="false"
                            >
                              Quarterly
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div
                          className="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="custom-tabs-four-mother-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-mother-daily-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryMotherDaillyAttendence handleAllMothers={handleAllMothers}/>
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="custom-tabs-four-mother-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-mother-quarterly-tab"
                          >
                            <div className="card-body table-responsive p-0">
                              <BeneficiaryMotherQuterlyAttendenceTable handleAllMothers={handleAllMothers}/>
                            </div>
                            <hr />
                            <div className="float-right">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddBenegiciaryDialog
         show={show}
         handleClose={handleClose}
         handleChildSubmit={saveChildChanges}
         handleMotherSubmit={saveMotherChanges}
         handleLactaticMotherSubmit={saveLactacticMotherChanges}
      />
    </div>
  );
}

export default Beneficiary;
