import React from "react";
import "./styles.css";

const invalidityMsg = (props) => {
  return (
    <div className="invalidityMsg">
      <p>{props.msg}</p>
    </div>
  );
};

export default invalidityMsg;