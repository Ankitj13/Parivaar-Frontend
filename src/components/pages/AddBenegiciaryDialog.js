import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../fileds/TextField";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SelectionFiels } from "../fileds/SelectionFiels";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validateChild = Yup.object({
  childName: Yup.string()
    .max(20, "Must be max 20 characters or min 3")
    .min(3, "Must be min 3 characters or max 20")
    .required("This filed is required"),
  parents_name: Yup.string()
    .max(20, "Must be 20 characters or less then 3")
    .min(3, "Must be min 3 characters or max 20")
    .required("This filed is required"),
  mobileno: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Must be 10 number")
    .min(10, "Must be 10 number")
    .required("This filed is required"),
  village: Yup.string().required("This filed is required"),
  category: Yup.string().required("This filed is required"),
  gender: Yup.string().required("This filed is required"),
  sevakutir_id: Yup.string().required("This filed is required"),
});

const validateMother = Yup.object({
  category: Yup.string().required("This filed is required"),
  sevakutir_id: Yup.string().required("This filed is required"),
  motherName: Yup.string()
    .min(3, "Mother name should have at least 3 character")
    .required("This filed is required"),
  motherAge: Yup.string().required("This filed is required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Must be 10 number")
    .min(10, "Must be 10 number")
    .required("This filed is required"),
  husband_name: Yup.string()
    .min(3, "Husband name should have at least 3 character")
    .required("This filed is required"),
});

const validateLacticMother = Yup.object({
  category: Yup.string().required("This filed is required"),
  sevakutir_id: Yup.string().required("This filed is required"),
  lacticMotherName: Yup.string()
    .min(3, "Mother name should have at least 3 character")
    .required("This filed is required"),
  age: Yup.string().required("This filed is required"),
  mobileno: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Must be 10 number")
    .min(10, "Must be 10 number")
    .required("This filed is required"),
  husbandname: Yup.string()
    .min(3, "Husband name should have at least 3 character")
    .required("This filed is required"),
});

const complications = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const category = [
  { value: "UR", label: "UR" },
  { value: "OBC", label: "OBC" },
  { value: "ST", label: "ST" },
  { value: "SC", label: "SC" },
];

const sevakutir_id = [
  { value: "4f806738-a184-4fac-b3d7-a4f378bbfc61", label: "Handiya" },
  { value: "4f806738-a184-4fac-b3d7-a4f378bbfc61", label: "Rehti" },
  { value: "4f806738-a184-4fac-b3d7-a4f378bbfc61", label: "Chakaldi" },
];

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

function AddBenegiciaryDialog(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [child, setChild] = useState(false);
  const [mother, setMother] = useState(false);
  const [lactatcMother, setLactatcMother] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const chiledSelected = () => {
    setChild(true);
    setMother(false);
    setLactatcMother(false);
  };
  const motherSelected = () => {
    setMother(true);
    setChild(false);
    setLactatcMother(false);
  };
  const lactatcMotherSelected = () => {
    setMother(false);
    setChild(false);
    setLactatcMother(true);
  };

  return (
    <>
      <Modal
        {...props}
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>ADD BENEFICIARY </Modal.Title>
          <button type="button" className="close" onClick={props.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={chiledSelected}
                  type="button"
                  style={{ marginRight: 5 }}
                >
                  Add Child
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={lactatcMotherSelected}
                  type="button"
                  style={{ marginRight: 5 }}
                >
                  Add Lactatic Mother
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={motherSelected}
                  type="button"
                >
                  Add Mother
                </button>
              </div>
            </div>
          </div>
          <>
            <Formik
              initialValues={{
                childName: "",
                parents_name: "",
                child_dob: "",
                village: "",
                mobileno: "",
                category: "",
                anganwari: "",
                gender: "male",
                complications: "",
                sevakutir_id: "",
              }}
              validationSchema={validateChild}
              onSubmit={(values) => {
                props.handleChildSubmit(values);
              }}
            >
              {(formik) => (
                <Form>
                  {!successful && child && (
                    <>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group text-center">
                            <h4>ADD CHILD</h4>
                          </div>
                          <hr />
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <TextField
                              label="Name"
                              name="childName"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <TextField
                              label="Father Name"
                              name="parents_name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <TextField
                              label="DOB"
                              name="child_dob"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <SelectionFiels
                              name="gender"
                              type="dropdown"
                              label="Gender"
                              options={gender}
                              value={formik.values.gender}
                              onChange={(value) =>
                                formik.setFieldValue("gender", value.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label for="exampleInputVillege">
                              Aanganwadi name
                            </label>
                            <div className="form-group">
                              <div className="">
                                <h6>
                                  <label
                                    className="form-check-label"
                                    for="A"
                                    style={{ paddingRight: 5 }}
                                  >
                                    A
                                  </label>
                                  <input
                                    type="radio"
                                    value="A"
                                    name="anganwari"
                                    className="Radio-Input"
                                    style={{ padding: 10 }}
                                  />

                                  <label
                                    className="form-check-label"
                                    for="B"
                                    style={{ paddingRight: 5, paddingLeft: 10 }}
                                  >
                                    B
                                  </label>
                                  <input
                                    type="radio"
                                    value="B"
                                    name="anganwari"
                                    className="Radio-Input"
                                  />

                                  <label
                                    className="form-check-label"
                                    for="C"
                                    style={{ paddingRight: 5, paddingLeft: 10 }}
                                  >
                                    C
                                  </label>
                                  <input
                                    type="radio"
                                    value="C"
                                    name="anganwari"
                                    className="Radio-Input"
                                  />
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <SelectionFiels
                              name="category"
                              type="dropdown"
                              label="Category"
                              options={category}
                              value={formik.values.category}
                              onChange={(value) =>
                                formik.setFieldValue("category", value.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <SelectionFiels
                              name="complications"
                              type="dropdown"
                              label="Complications"
                              options={complications}
                              value={formik.values.complications}
                              onChange={(value) =>
                                formik.setFieldValue(
                                  "complications",
                                  value.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <TextField
                              label="Mobile"
                              name="mobileno"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <TextField
                              label="Village"
                              name="village"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <SelectionFiels
                              name="sevakutir_id"
                              type="dropdown"
                              label="Seva Kutir"
                              options={sevakutir_id}
                              value={formik.values.sevakutir_id}
                              onChange={(value) =>
                                formik.setFieldValue(
                                  "sevakutir_id",
                                  value.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          onClick={props.handleClose}
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Add Child
                        </button>
                      </div>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </>

          {lactatcMother && (
            <>
              <Formik
                initialValues={{
                  lacticMotherName: "",
                  husbandname: "",
                  age: "",
                  familyMembers: "",
                  mobileno: "",
                  category: "",
                  complications: "",
                  monthOfDelivery: "",
                  anganwari: "",
                  numberOfChild: "",
                  sevakutir_id: "",
                }}
                validationSchema={validateLacticMother}
                onSubmit={(values) => {
                  props.handleLactaticMotherSubmit(values);
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group text-center">
                          <h4>ADD LACTATIC MOTHER</h4>
                        </div>
                        <hr />
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Name"
                            name="lacticMotherName"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Husband Name"
                            name="husbandname"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField label="Age" name="age" type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="exampleInputAge">Month of Delivery</label>
                          <select
                            className="form-control"
                            name="monthOfDelivery"
                          >
                            <option>Select Month of Delivery</option>
                            <option>1 month</option>
                            <option>2 month</option>
                            <option>3 month</option>
                            <option>4 month</option>
                            <option>5 month</option>
                            <option>6 month</option>
                            <option>7 month</option>
                            <option>8 month</option>
                            <option>9 month</option>
                            <option>10 month</option>
                            <option>11 month</option>
                            <option>12 month</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="category"
                            type="dropdown"
                            label="Category"
                            options={category}
                            value={formik.values.category}
                            onChange={(value) =>
                              formik.setFieldValue("category", value.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="exampleInputVillege">
                            Aanganwadi name
                          </label>
                          <div className="form-group">
                            <div className="">
                              <h6>
                                <label
                                  className="form-check-label"
                                  for="A"
                                  style={{ paddingRight: 5 }}
                                >
                                  A
                                </label>
                                <input
                                  id="A"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                  style={{ padding: 10 }}
                                />

                                <label
                                  className="form-check-label"
                                  for="B"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  B
                                </label>
                                <input
                                  id="B"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                />

                                <label
                                  className="form-check-label"
                                  for="C"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  C
                                </label>
                                <input
                                  id="C"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="sevakutir_id"
                            type="dropdown"
                            label="Seva Kutir"
                            options={sevakutir_id}
                            value={formik.values.sevakutir_id}
                            onChange={(value) =>
                              formik.setFieldValue("sevakutir_id", value.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Mobile"
                            name="mobileno"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="No. of Child"
                            name="numberOfChild"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Total Family Members"
                            name="familyMembers"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="complications"
                            type="dropdown"
                            label="Complications"
                            options={complications}
                            value={formik.values.complications}
                            onChange={(value) =>
                              formik.setFieldValue("complications", value.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer justify-content-between">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        onClick={props.handleClose}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        ADD LACTATIC MOTHER
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}

          {mother && (
            <>
              <Formik
                initialValues={{
                  motherName: "",
                  husband_name: "",
                  motherAge: "",
                  familyMembers: "",
                  mobile: "",
                  category: "",
                  complications: "",
                  monthOfPregnancy: "",
                  anganwari: "",
                  sevakutir_id: "",
                  numberOfChild: "",
                }}
                validationSchema={validateMother}
                onSubmit={(values) => {
                  props.handleMotherSubmit(values);
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group text-center">
                          <h4>ADD MOTHER</h4>
                        </div>
                        <hr />
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Name"
                            name="motherName"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Husband Name"
                            name="husband_name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField label="Age" name="motherAge" type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="exampleInputAge">Month of Delivery</label>
                          <select className="form-control">
                            <option>Select Month of Delivery</option>
                            <option>1 month</option>
                            <option>2 month</option>
                            <option>3 month</option>
                            <option>4 month</option>
                            <option>5 month</option>
                            <option>6 month</option>
                            <option>7 month</option>
                            <option>8 month</option>
                            <option>9 month</option>
                            <option>10 month</option>
                            <option>11 month</option>
                            <option>12 month</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="category"
                            type="dropdown"
                            label="Category"
                            options={category}
                            value={formik.values.category}
                            onChange={(value) =>
                              formik.setFieldValue("category", value.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="exampleInputVillege">
                            Aanganwadi name
                          </label>
                          <div className="form-group">
                            <div className="">
                              <h6>
                                <label
                                  className="form-check-label"
                                  for="A"
                                  style={{ paddingRight: 5 }}
                                >
                                  A
                                </label>
                                <input
                                  id="A"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                  style={{ padding: 10 }}
                                />

                                <label
                                  className="form-check-label"
                                  for="B"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  B
                                </label>
                                <input
                                  id="B"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                />

                                <label
                                  className="form-check-label"
                                  for="C"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  C
                                </label>
                                <input
                                  id="C"
                                  name="gender"
                                  type="radio"
                                  className="Radio-Input"
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="sevakutir_id"
                            type="dropdown"
                            label="Seva Kutir"
                            options={sevakutir_id}
                            value={formik.values.sevakutir_id}
                            onChange={(value) =>
                              formik.setFieldValue("sevakutir_id", value.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField label="Mobile" name="mobile" type="text" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="No. of Child"
                            name="numberOfChild"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Total Family Members"
                            name="familyMembers"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <SelectionFiels
                            name="complications"
                            type="dropdown"
                            label="Complications"
                            options={complications}
                            value={formik.values.complications}
                            onChange={(value) =>
                              formik.setFieldValue("complications", value.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        onClick={props.handleClose}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Add MOTHER
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBenegiciaryDialog;
