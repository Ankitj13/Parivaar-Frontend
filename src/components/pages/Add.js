import React, { useState, useEffect, useMemo } from "react";
import AddMember from "./AddMember";
import { useDispatch, useSelector } from "react-redux";
import { loadMembersUsers } from "../../actions/publicActions";
import { addMember } from "../../actions/auth";
import { EmployeeTable } from "../include/ColumsTables";
import { GlobelFilter } from "../include/GlobelFilter";
import { Pagination } from "../include/Pagination";


function Add() {
  // const [filteredEmployee, setFilterededEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  // let dispatch = useDispatch();
  const { employees } = useSelector((state) => state.data);
  console.log(employees);
  useEffect(() => {
    dispatch(loadMembersUsers());
   // console.log(dispatch(loadMembersUsers()));
  }, []);

  const saveChanges = (values) => {
    dispatch(addMember(values))
      .then((response) => {
        setShow(false);
        dispatch(loadMembersUsers());
        setSuccessful(true);
      })
      .catch((e) => {
        setSuccessful(false);
      });
  };

  return (
    <React.Fragment>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Add Employee</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-12">
{/* <GlobelFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group"></div>
              </div>
              <div class="col-lg-2 col-12">
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-block btn-outline-primary"
                    data-toggle="modal"
                    data-target="#modal-lg"
                    onClick={handleShow}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body table-responsive p-0">
                    <Pagination data={employees} columns={EmployeeTable} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AddMember
        show={show}
        handleClose={handleClose}
        handleSubmit={saveChanges}
      />
    </React.Fragment>
  );
}

export default Add;
