import React from "react";
import "./FormField.css";

function FormField(props) {
  const { id, label, type, isRequired, onChange, value } = props;

  return (
    <div className="FormField">
      <label className="FormField__label" htmlFor={id}>
        {label}
        {isRequired ? <span className="FormField__required">*</span> : ""}
      </label>
      <input
        className="FormField__input"
        type={type}
        id={id}
        required={isRequired}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormField;
