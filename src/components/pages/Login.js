import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../actions/auth";
import { TextField } from "../fileds/TextField";

const validate = Yup.object({
  username: Yup.string()
    .email("Email is Invaild")
    .required("This filed is required"),
  password: Yup.string().required("This filed is required"),
});

function Login(props) {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = (username, password) => {
    setLoading(true);
    dispatch(login(username, password))
      .then(() => {
        props.history.push("/home");
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div
      className=""
      style={{
        WebkitAlignItems: "center",
        display: "flex",
        WebkitJustifyContent: "center",
        paddingTop: 50,
      }}
    >
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h2>
              <b>Parivaar</b> Health
            </h2>
          </div>
          <div className="card-body">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                handleLogin(values);
              }}
            >
              {(formik) => (
                <Form>
                  <div classNameName="row">
                    <div className="col-md-12">
                      <TextField type="text" name="username" label="Username" />
                    </div>
                    <div className="col-md-12">
                      <TextField
                        type="password"
                        name="password"
                        label="Password"
                      />
                    </div>
                    <div className="col-md-12">
                      {message && <div className="login-error">{message}</div>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={loading}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                      </button>
                    </div>
                    <div className="col-12"></div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
