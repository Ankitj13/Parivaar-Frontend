import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Formik, Form } from "formik";

import { login } from "../../actions/auth";

const validate = Yup.object({
  email: Yup.string()
    .email("Email is Invaild")
    .required("This filed is required"),
  password: Yup.string()
    .required("This filed is required"),
});


const required = (value) => {
  if (!value) {
    return (
      <div class="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Lohdsgfdfsd(props) {

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/home");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div  class="" style={{WebkitAlignItems: "center", display: "flex", WebkitJustifyContent: "center", paddingTop: 50}}>
      <div class="login-box" >
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
              <h2><b>Parivaar</b> Health</h2>
          </div>
          <div class="card-body">

            <Form onSubmit={handleLogin} ref={form}>
              <div class="">
                <Input type="text" class="form-control" placeholder="Email"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
                />
              </div>
              <br/>
              <div class="">
                <Input
                  type="password"
                  class="form-control"
                  placeholder="Password" type="password"
                  name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              />

              </div><br/>
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-primary btn-block"  disabled={loading}>
                  {loading && (
                <span class="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
                  </button>
                </div>
              </div>
<br/>
              {message && (
            <div class="form-group">
              <div class="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />


            </Form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lohdsgfdfsd;
