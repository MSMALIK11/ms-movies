import React from "react";

const CheckBox = ({ Text, validfor }) => {
  return (
    <div>
      <div class=" checkbox-wraper ">
        <input
          className="form-check-input mt-0 me-4"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />
        <span className=" checkbox-text">{Text}</span>
      </div>

      <span className="text-muted  text-light fs-3 mt-3 fst-italic">
        {validfor ? validfor : ""}{" "}
      </span>
    </div>
  );
};

export default CheckBox;
