import React from "react";
import CheckBox from "./ReuseComponent/CheckBox";
import InputField from "./ReuseComponent/InputField";

const Signin = () => {
  return (
    <div>
      <div className="signup-wraper">
        <div className="container">
          <div className="row">
            <form>
              <div className="row">
                <h1 className="text-light">Signup</h1>
                <div className="col-md-6">
                  <InputField placeText="username" icon="bi bi-person" />
                </div>
                <div className="col-md-6">
                  <InputField
                    placeText="example@gmail.com"
                    icon="bi bi-envelope"
                  />
                </div>
                <div className="col-md-6">
                  <InputField placeText="password" icon="bi bi-lock" />
                </div>
                <div className="col-md-6">
                  <InputField placeText="Re-Password" icon="bi bi-lock" />
                </div>
                <div className="col-md-12  ">
                  <CheckBox
                    Text="Free-Free / 15 days"
                    validfor="valid for 15 days"
                  />
                  <CheckBox Text="Premium - 199$ / 1 Month" />
                  <CheckBox Text="Standard - 99$ / 1 Month " />
                  <CheckBox Text="Basic - 29$ / 1 Month" />
                </div>
              </div>
              <button className="btn btn-danger mt-4 fs-2 px-4 py-3 bold">
                Signup Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
