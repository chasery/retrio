import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form id={props.id} className="Form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;
