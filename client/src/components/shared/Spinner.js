import React from "react";

const Spinner = () => {
  return (
    <div className="center-container">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
