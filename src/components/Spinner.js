import React from "react";
import "../styles/Spinner.css";

const Spinner = ({ text }) => {
  return (
    <React.Fragment>
      <div className="text-center spinner">
        <div className="spinner-border" role="status"></div>
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
