import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../fileds/TextField";
import { SelectionFiels } from "../fileds/SelectionFiels"; 
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validate = Yup.object({
  name: Yup.string()
    .required("This filed is required"),
  email: Yup.string()
    .email("Email is Invaild")
    .required("This filed is required"),
  mobileno: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Must be 10 characters")
    .min(10, "Must be 10 characters")
    .required("This filed is required"),
  village: Yup.string()
    .required("This filed is required"),
  password: Yup.string()
    .required("This filed is required"),
  role_id: Yup.string().required("This filed is required"),
});

const options = [
  { value: "5a4c1427-6612-437f-9692-3c57d3864903", label: "Admin" },
  { value: "c4e2b49b-2ae0-4b45-8f1b-a290f0409a90", label: "Opreater" },
  { value: "0389c85a-c3fa-4550-a036-51b753e707ce", label: "User" },
];

function AddMember(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [successful, setSuccessful] = useState(false);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
    <div className="content-wrapper">
    <Modal
        {...props}
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header>
                           
          <Modal.Title>Add Member</Modal.Title>
          <button type="button" class="close" onClick={props.handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
        </Modal.Header>

            <Formik
              initialValues={{
                name: "",
                email: "",
                village: "",
                mobileno: "",
                password: "",
                role_id: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                props.handleSubmit(values);
              }}
            >
              {(formik) => (
                <Form>
                  {!successful && (
                    <>
                      <Modal.Body>
                        <div class="row">
                          <div class="col-md-6">
                            <TextField label="Name" name="name" type="text" />
                          </div>
                          <div class="col-md-6">
                            <TextField
                              label="Email"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div class="col-md-6">
                            <TextField
                              label="Village"
                              name="village"
                              type="text"
                            />
                          </div>
                          <div class="col-md-6">
                            <TextField
                              label="Mobile no"
                              name="mobileno"
                              type="text"
                            />
                          </div>
                          <div class="col-md-6">
                            <TextField
                              label="Password"
                              name="password"
                              type="text"
                            />
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <SelectionFiels
                                name="role_id"
                                type="dropdown"
                                label="Role"
                                options={options}
                                value={formik.values.role_id}
                                onChange={(value) =>
                                  formik.setFieldValue("role_id", value.value)
                                }
                              />                             
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="justify-content-between">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          onClick={props.handleClose}
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </Modal.Footer>
                    </>
                  )}
                </Form>
              )}
            </Formik>
      </Modal>
      </div>
    </React.Fragment>
  );
}
export default AddMember;
