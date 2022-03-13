import React, { Component } from "react";
import DistrictFilter from "../include/DistrictFilter";

export default class Report extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Report</h1>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
 <DistrictFilter/>
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary card-outline card-outline-tabs">
                    <div className="card-header p-0 border-bottom-0">
                      <ul
                        className="nav nav-tabs"
                        id="custom-tabs-four-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="custom-tabs-four-child-tab"
                            data-toggle="pill"
                            href="#custom-tabs-four-child"
                            role="tab"
                            aria-controls="custom-tabs-four-child"
                            aria-selected="true"
                          >
                            Child
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="custom-tabs-four-lacteting-mother-tab"
                            data-toggle="pill"
                            href="#custom-tabs-four-lacteting-mother"
                            role="tab"
                            aria-controls="custom-tabs-four-lacteting-mother"
                            aria-selected="false"
                          >
                            Lacteting Mother
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="custom-tabs-four-mother-tab"
                            data-toggle="pill"
                            href="#custom-tabs-four-mother"
                            role="tab"
                            aria-controls="custom-tabs-four-mother"
                            aria-selected="false"
                          >
                            Mother
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content" id="custom-tabs-four-tabContent">
                        <div
                          className="tab-pane active fade show"
                          id="custom-tabs-four-child"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-child-tab"
                        >
                          <table className="table table-hover text-nowrap">
                            <thead>
                              <tr>
                                <th>Sn.</th>
                                <th>Name</th>
                                <th>Parente Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>183</td>
                                <td>Roshan</td>
                                <td>Prakash Chohan</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade "
                          id="custom-tabs-four-lacteting-mother"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-lacteting-mother-tab"
                        >
                          <table className="table table-hover text-nowrap">
                            <thead>
                              <tr>
                                <th>Sn.</th>
                                <th>Name</th>
                                <th>Parente Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>185</td>
                                <td>Roshan</td>
                                <td>Prakash Chohan</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="custom-tabs-four-mother"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-mother-tab"
                        >
                          <table className="table table-hover text-nowrap">
                            <thead>
                              <tr>
                                <th>Sn.</th>
                                <th>Name</th>
                                <th>Parente Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>186</td>
                                <td>Roshan</td>
                                <td>Prakash Chohan</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
