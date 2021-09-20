import React from "react";
import "./styles.css";

const ProfileButtom = (props) => {
  return (
    <button onClick={props.onClick} id="profileButton">
      {props.text}
    </button>
  );
};

export default ProfileButtom;