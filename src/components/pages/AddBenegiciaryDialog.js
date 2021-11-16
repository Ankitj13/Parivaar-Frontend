import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { TextField } from '../fileds/TextField';
import * as Yup from 'yup';

function AddBenegiciaryDialog(props) {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
     name: Yup.string()
     .max(20, 'Must be max 20 characters or min 3')
     .min(3, 'Must be min 3 characters or max 20')
     .required('This filed is required'),
     fathername: Yup.string()
     .max(20, 'Must be 20 characters or less then 3')
     .min(3, 'Must be min 3 characters or max 20')
     .required('This filed is required'),
     mothername: Yup.string()
     .max(20, 'Must be 20 characters or less then 3')
     .min(3, 'Must be min 3 characters or max 20')
     .required('This filed is required'),
     mobile: Yup.string()
     .matches(phoneRegExp, 'Phone number is not valid')
     .required('This filed is required'),
     kutir: Yup.string()
     .max(20, 'Must be 20 characters or less then 3')
     .min(3, 'Must be min 3 characters or max 20')
     .required('This filed is required'),
     husbandname: Yup.string()
     .max(20, 'Must be 20 characters or less then 3')
     .min(3, 'Must be min 3 characters or max 20')
     .required('This filed is required'),
     age: Yup.string()
     .max(3, 'Must be 3 characters or min then 1')
     .min(1, 'Must be min 1 characters or max 3')
     .required('This filed is required'),
     noofchild: Yup.string()
     .max(1, 'Must be 1 characters or min then 1')
     .min(1, 'Must be min 1 characters or max 1')
     .required('This filed is required'),
     totalfamilymembers: Yup.string()
     .max(1, 'Must be 1 characters or min then 1')
     .min(1, 'Must be min 1 characters or max 1')
     .required('This filed is required'),
  })
  const [child, setChild] = useState(false);
  const [mother, setMother] = useState(false);
  const [lactatcMother, setLactatcMother] = useState(false);

  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (e) => {
    setSelectedValue(e.value);
    console.log(e.value);
  };
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
      <div class="modal fade" id="modal-lg" {...props} backdrop="static">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">ADD BENEFICIARY</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <button
                        class="btn btn-block btn-outline-primary"
                        onClick={chiledSelected}
                        type="button"
                        style={{ marginRight: 5 }}
                      >
                        Add Child
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <button
                        class="btn btn-block btn-outline-primary"
                        onClick={lactatcMotherSelected}
                        type="button"
                        style={{ marginRight: 5 }}
                      >
                        Add Lactatic Mother
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <button
                        class="btn btn-block btn-outline-primary"
                        onClick={motherSelected}
                        type="button"
                      >
                        Add Mother
                      </button>
                    </div>
                  </div>
                </div>
                {child && (
                  <>
                    <Formik
        initialValues={{
          name : '',
          fathername: '',
          mothername: '',
          mobile: ''
        }}

        validationSchema = {validate}
        onSubmit = {values => {
          console.log(values);
        }}
        >
          {formik => (
            <Form>
          
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group text-center">
                          <h4>ADD CHILD</h4>
                        </div>
                        <hr/>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Name" name="name" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Father Name" name="fathername" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Mother Name" name="mothername" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputGender">Gender</label>

                          <div class="">
                            <h6>
                              <label
                                class="form-check-label"
                                for="male"
                                style={{ paddingRight: 5 }}
                              >
                                Male
                              </label>
                              <input
                                id="male"
                                name="gender"
                                type="radio"
                                class="Radio-Input"
                                required=""
                                style={{ padding: 10 }}
                              />

                              <label
                                class="form-check-label"
                                for="female"
                                style={{ paddingRight: 5, paddingLeft: 10 }}
                              >
                                Female
                              </label>
                              <input
                                id="female"
                                name="gender"
                                type="radio"
                                class="Radio-Input"
                                required=""
                              />

                              <label
                                class="form-check-label"
                                for="other"
                                style={{ paddingRight: 5, paddingLeft: 10 }}
                              >
                                Other
                              </label>
                              <input
                                id="other"
                                name="gender"
                                type="radio"
                                class="Radio-Input"
                                required=""
                              />
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Caste Category
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="ur"
                                  style={{ paddingRight: 5 }}
                                >
                                  UR
                                </label>
                                <input
                                  id="ur"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="obc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  OBC
                                </label>
                                <input
                                  id="obc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="st"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  ST
                                </label>
                                <input
                                  id="st"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="sc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  SC
                                </label>
                                <input
                                  id="sc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Aanganwadi name
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="A"
                                  style={{ paddingRight: 5 }}
                                >
                                  A
                                </label>
                                <input
                                  id="A"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="B"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  B
                                </label>
                                <input
                                  id="B"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="C"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  C
                                </label>
                                <input
                                  id="C"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                      <div class="form-group">
                  <label>DOB</label>
                  <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputMobileNo">Kutir</label>
                          <select class="form-control">
                            <option>Select Kutir</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Mobile No." name="mobile" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputMobileNo">Complications</label>
                          <select class="form-control">
                            <option>Select Complications</option>
                            <option>Normal</option>
                            <option>Problem</option>
                          </select>
                        </div>
                      </div>
                    
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputMobileNo">Child Age Group</label>
                          <select class="form-control">
                            <option>Select Child Age Group</option>
                            <option>0 to 6 Months</option>
                            <option>6 Month to 3 Years</option>
                          </select>
                        </div>
                      </div></div>
                      <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={props.onHide}
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
              ADD Child
              </button>
            </div>
            </Form>
          )}
        </Formik>
                  </>
                )}

{lactatcMother && (
                  <>
                                      <Formik
        initialValues={{
          name : '',
          husbandname: '',
          age: '',
          mobile: '',
          noofchild: '',
          totalfamilymembers: ''
        }}

        validationSchema = {validate}
        onSubmit = {values => {
          console.log(values);
        }}
        >
          {formik => (
            <Form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group text-center">
                          <h4>ADD LACTATIC MOTHER</h4>
                        </div>
                        <hr/>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Name" name="name" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Husband Name" name="husbandname" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Age" name="age" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputAge">Month of Delivery</label>
                          <select class="form-control">
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
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Caste Category
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="ur"
                                  style={{ paddingRight: 5 }}
                                >
                                  UR
                                </label>
                                <input
                                  id="ur"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="obc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  OBC
                                </label>
                                <input
                                  id="obc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="st"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  ST
                                </label>
                                <input
                                  id="st"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="sc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  SC
                                </label>
                                <input
                                  id="sc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Aanganwadi name
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="A"
                                  style={{ paddingRight: 5 }}
                                >
                                  A
                                </label>
                                <input
                                  id="A"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="B"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  B
                                </label>
                                <input
                                  id="B"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="C"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  C
                                </label>
                                <input
                                  id="C"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                      <div class="form-group">
                          <label for="exampleInputMobileNo">Kutir</label>
                          <select class="form-control">
                            <option>Kutir</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Mobile" name="mobile" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="No. of Child" name="noofchild" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="Total Family Members" name="totalfamilymembers" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputMobileNo">Complications</label>
                          <select class="form-control">
                            <option>Select Complications</option>
                            <option>Normal</option>
                            <option>Problem</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={props.onHide}
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Add LACTATIC MOTHER
              </button>
            </div></Form>
          )}
        </Formik>
                  </>
                )}

                {mother && (
                  <>
                     <Formik
        initialValues={{
          name : '',
          husbandname: '',
          age: '',
          mobile: '',
          noofchild: '',
          totalfamilymembers: ''
        }}
        
        validationSchema = {validate}
        onSubmit = {values => {
          console.log(values);
        }}
        >

        {formik => (
          <Form>
                    <div class="row">
                      
                      <div class="col-md-12">
                        <div class="form-group text-center">
                          <h4>ADD MOTHER</h4>
                        </div>
                        <hr/>
                      </div>
                    
                      <div class="col-md-4">
                        <div class="form-group">
                        <TextField label="Name" name="name" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                        <TextField label="Husband Name" name="husbandname" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                        <TextField label="Age" name="age" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputAge">Month of Delivery</label>
                          <select class="form-control">
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
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Caste Category
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="ur"
                                  style={{ paddingRight: 5 }}
                                >
                                  UR
                                </label>
                                <input
                                  id="ur"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="obc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  OBC
                                </label>
                                <input
                                  id="obc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="st"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  ST
                                </label>
                                <input
                                  id="st"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="sc"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  SC
                                </label>
                                <input
                                  id="sc"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputVillege">
                            Aanganwadi name
                          </label>
                          <div class="form-group">
                            <div class="">
                              <h6>
                                <label
                                  class="form-check-label"
                                  for="A"
                                  style={{ paddingRight: 5 }}
                                >
                                  A
                                </label>
                                <input
                                  id="A"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                  style={{ padding: 10 }}
                                />

                                <label
                                  class="form-check-label"
                                  for="B"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  B
                                </label>
                                <input
                                  id="B"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />

                                <label
                                  class="form-check-label"
                                  for="C"
                                  style={{ paddingRight: 5, paddingLeft: 10 }}
                                >
                                  C
                                </label>
                                <input
                                  id="C"
                                  name="gender"
                                  type="radio"
                                  class="Radio-Input"
                                  required=""
                                />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                      <div class="form-group">
                          <label for="exampleInputMobileNo">Kutir</label>
                          <select class="form-control">
                            <option>Kutir</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                        <TextField label="Mobile" name="mobile" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <TextField label="No. of Child" name="noofchild" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group"> 
                        <TextField label="Total Family Members" name="totalfamilymembers" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputMobileNo">Complications</label>
                          <select class="form-control">
                            <option>Select Complications</option>
                            <option>Normal</option>
                            <option>Problem</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={props.onHide}
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
              ADD MOTHER
              </button>
            </div></Form>
          )}
        </Formik>
                  </>
                )}
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBenegiciaryDialog;
