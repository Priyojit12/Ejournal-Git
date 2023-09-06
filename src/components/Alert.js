import React from "react";

const Alert = (props) => {
  const converFirstToUpCase = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.errType} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{converFirstToUpCase(props.alert.message)}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
};

export default Alert;
