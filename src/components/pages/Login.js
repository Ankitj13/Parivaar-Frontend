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
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const handleLogin = (username, password) => {
    setLoading(true);

    dispatch(login(username, password))
      .then(() => {
        props.history.push("/home")
        // if(!response == 0){
        //   throw Error('Kuch to gadbad hai daya');
        // }
        // else{
        //   props.history.push("/home")
        //   throw Error('Aaiye apka intzar tha');
        // }
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
      class=""
      style={{
        WebkitAlignItems: "center",
        display: "flex",
        WebkitJustifyContent: "center",
        paddingTop: 50,
      }}
    >
      <div class="login-box">
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <h2>
              <b>Parivaar</b> Health
            </h2>
          </div>
          <div class="card-body">
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
                  <div class="col-md-12">
                    <TextField type="text" name="username" label="Username" />
                  </div>
                  <div class="col-md-12">
                    <TextField
                      type="password"
                      name="password"
                      label="Password"
                    />
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                        disabled={loading}
                      >
                        {loading && (
                          <span class="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                      </button>
                    </div>
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
