import React from "react";

const InputField = ({ placeText, icon }) => {
  return (
    <div className="input-box">
      <span>
        <i className={icon}></i>
      </span>
      <input type="text" className="inputText" placeholder={placeText} />
    </div>
  );
};

export default InputField;
