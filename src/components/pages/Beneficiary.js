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

  const [modalShow, setModalShow] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Beneficiary</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="container-fluid">
          <DistrictFilter />

          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="form-group"></div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="far fa-calendar-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control float-right"
                    id="reservation"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="card-outline-tabs">
                <div class="card-header p-0 border-bottom-0">
                  <ul
                    class="nav nav-tabs "
                    id="custom-tabs-four-tab"
                    role="tablist"
                  >
                    <NavLink class="pt-2 px-3" to="#">
                      <i
                        class="fas fa-user-plus"
                        data-toggle="modal"
                        data-target="#modal-lg"
                        onClick={() => setModalShow(true)}
                      ></i>
                    </NavLink>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
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
                    <li class="nav-item">
                      <a
                        class="nav-link"
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
                    <li class="nav-item">
                      <a
                        class="nav-link"
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

                <div class="tab-content" id="custom-tabs-four-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="custom-tabs-four-child"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-child-tab"
                  >
                    <div class="card card-primary card-outline card-outline-tabs">
                      <div class="card-header p-0">
                        <ul
                          class="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              class="nav-link active"
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
                          <li class="nav-item">
                            <a
                              class="nav-link"
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
                      <div class="card-body">
                        <div
                          class="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            class="tab-pane fade show active"
                            id="custom-tabs-four-child-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-child-daily-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryDailyAttendenceTable handleAllChilds={handleAllChilds}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="custom-tabs-four-child-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-child-quarterly-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryChildQuterlyAttendenceTable handleAllChilds={handleAllChilds}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="custom-tabs-four-lactating-mother"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-lactating-mother-tab"
                  >
                    <div class="card card-primary card-outline card-outline-tabs">
                      <div class="card-header p-0">
                        <ul
                          class="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              class="nav-link active"
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
                          <li class="nav-item">
                            <a
                              class="nav-link"
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
                      <div class="card-body">
                        <div
                          class="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            class="tab-pane fade show active"
                            id="custom-tabs-four-lactating-mother-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-lactating-mother-daily-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryDailyAttendenceTable handleAllLactaticMothers={handleAllLactaticMothers}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="custom-tabs-four-lactating-mother-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-lactating-mother-quarterly-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryMotherQuterlyAttendenceTable handleAllLactaticMothers={handleAllLactaticMothers}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="custom-tabs-four-mother"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-four-mother-tab"
                  >
                    <div class="card card-primary card-outline card-outline-tabs">
                      <div class="card-header p-0">
                        <ul
                          class="nav nav-tabs"
                          id="custom-tabs-four-tab"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              class="nav-link active"
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
                          <li class="nav-item">
                            <a
                              class="nav-link"
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
                      <div class="card-body">
                        <div
                          class="tab-content"
                          id="custom-tabs-four-tabContent"
                        >
                          <div
                            class="tab-pane fade show active"
                            id="custom-tabs-four-mother-daily"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-mother-daily-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryDailyAttendenceTable handleAllMothers={handleAllMothers}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="custom-tabs-four-mother-quarterly"
                            role="tabpanel"
                            aria-labelledby="custom-tabs-four-mother-quarterly-tab"
                          >
                            <div class="card-body table-responsive p-0">
                              <BeneficiaryMotherQuterlyAttendenceTable handleAllMothers={handleAllMothers}/>
                            </div>
                            <hr />
                            <div class="float-right">
                              <button type="submit" class="btn btn-primary">
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
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Beneficiary;
