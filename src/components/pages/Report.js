import React, { Component } from "react";
import DistrictFilter from "../include/DistrictFilter";

export default class Report extends Component {
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Report</h1>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="container-fluid">
 <DistrictFilter/>
              <div class="row">
                <div class="col-12">
                  <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                      <ul
                        class="nav nav-tabs"
                        id="custom-tabs-four-tab"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active"
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
                        <li class="nav-item">
                          <a
                            class="nav-link"
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
                        <li class="nav-item">
                          <a
                            class="nav-link"
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
                    <div class="card-body">
                      <div class="tab-content" id="custom-tabs-four-tabContent">
                        <div
                          class="tab-pane active fade show"
                          id="custom-tabs-four-child"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-child-tab"
                        >
                          <table class="table table-hover text-nowrap">
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
                          class="tab-pane fade "
                          id="custom-tabs-four-lacteting-mother"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-lacteting-mother-tab"
                        >
                          <table class="table table-hover text-nowrap">
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
                          class="tab-pane fade"
                          id="custom-tabs-four-mother"
                          role="tabpanel"
                          aria-labelledby="custom-tabs-four-mother-tab"
                        >
                          <table class="table table-hover text-nowrap">
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
