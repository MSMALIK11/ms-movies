import React from "react";
import CheckBox from "./ReuseComponent/CheckBox";
import InputField from "./ReuseComponent/InputField";

const Login = () => {
  return (
    <div>
      <div className="signup-wraper">
        <div className="container">
          <div className="row">
            <form className="login-form">
              <div className="row">
                <h1 className="text-light">Login</h1>
                <div className="col-md-12">
                  <InputField
                    placeText="example@gmail.com"
                    icon="bi bi-envelope"
                  />
                </div>
                <div className="col-md-12">
                  <InputField placeText="password" icon="bi bi-key-fill" />
                </div>
              </div>
              <button className="btn ">Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
